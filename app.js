require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kaoc8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, function(err, client) {
    console.log("connected to server");
    const db = client.db("craigslist");

    const app = express();
    app.use(cors({
        origin: true,
        credentials: true,
        exposedHeaders: ['set-cookie']
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    app.use(session({
        secret: 'wow very secret',
        saveUninitialized: true,
        resave: true,
        cookie: {
            httpOnly: false,
            secure: false,
            sameSite: false
        }
    }));

    function isLoggedIn(req, res, next) {
        if (req.session && req.session.user) {
            next();
        } else {
            res.sendStatus(403).send("You are not logged in");
        }
    }

    const server = app.listen(process.env.PORT || 5000, function() {
        const host = server.address().address;
        const port = server.address().port;
        console.log("listening at http://" + host + ":" + port);
    });

	const entries = db.collection("entries");
	app.get("/api/entries", async function(req,res) {
        const pageNumber = parseInt(req.query.page);
        const columnToSortBy = req.query.sortBy;
        const order = req.query.order ? parseInt(req.query.order) : 1;
        const nPerPage = 25;
        let resEntries;
        if (columnToSortBy) {
            const sortQuery = { [columnToSortBy]: order };
            resEntries = await entries.find()
                .sort(sortQuery)
                .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
                .limit( nPerPage )
                .toArray();
        } else {
            resEntries = await entries.find()
				.skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
				.limit( nPerPage )
				.toArray();
        }
		res.json(resEntries);
    });
    
    app.get("/api/randomEntries", async function(req, res) {
        const resEntries = await entries.aggregate(
            [ { $sample: { size: 25 } } ]
        ).toArray();
        res.json(resEntries);
    })

    const users = db.collection("users");
    app.get("/api/user", function(req, res) {
        if (req.session.user) {
            res.json({ user: req.session.user});
        } else {
            res.json({ user: null });
        }
    });
    app.post("/api/logout", function(req, res) {
        req.session.user = null;
        req.session.save();
        res.sendStatus(200);
    })
    app.post("/api/login", async function(req, res) {
        let { email, password } = req.body;
        const user = await users.findOne({ email });
        if (!user) {
            res.status(404).send({ message: "User does not exist" });
            return;
        }
        if (user.password != password) {
            res.status(400).send({ message: "Failed to authenticate" });
            return;
        }
        req.session.user = email;
        req.session.save(function(err) {
            if (err) {
                res.status(404).send({ message: err });
                return;
            }
            res.json({ user: email });
        });
    });
    app.post("/api/register", async function(req, res, next) {
        try {
            let { email, name, password } = req.body;
            const user = await users.findOne({ email });
            if (user) {
                res.status(404).send({ message: "User already exists" });
                return;
            }
            await users.insertOne({ email, name, password });
            req.session.user = email;
            req.session.save(function(err) {
                if (err) {
                    res.status(404).send({ message: err });
                    return;
                }
                res.json({ user: email });
            });
        } catch (err) {
            next(err);
        }
    });

    const places = db.collection("places");
    app.post("/api/places", isLoggedIn, async function(req, res) {
        const entry = { ...req.body };
        const place = {
            user: req.session.user,
            place: entry,
            created: new Date()
        }
        await places.insertOne(place);
        res.json({ message: "Success" });
    })

    app.get("/api/places", isLoggedIn, async function(req, res, next) {
        try {
            const user = req.session.user;
            const ret = await places.find({ user }).toArray();
            res.json(ret);
        } catch (err) {
            res.json([]);
        }
    })

    app.delete("/api/places/:id", isLoggedIn, async function(req, res) {
        const id = new ObjectId(req.params.id);
        const place = await places.findOne({ _id: id });
        if (place.user != req.session.user) {
            res.sendStatus(403);
            return;
        }
        await places.findOneAndDelete({ _id: id });
        res.json({ message: "Success" });
    })
});
