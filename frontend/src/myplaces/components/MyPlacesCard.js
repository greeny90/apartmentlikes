import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import "./MyPlaces.css";

const MyPlacesCard = props => {
    const entry = props.place.place;
    const [showImage, setShowImage] = useState(false);
    const title = entry["result-title"];
    const hood = entry["result-hood"];
    const housing = entry["housing"];
    const price = entry["result-price"];
    const images = entry && entry["images"] ? entry["images"] : [];
    const date = new Date(props.place.created);
    const onUnlike = () => {
        props.onUnlike(props.place);
    }
    const toggleImage = () => {
        setShowImage(!showImage);
    }
    
    return (
        <React.Fragment>
            <Card className='place-card'>
                <h3>{ title }</h3>
                <h4>Saved on {date.toLocaleDateString()}</h4>
                <h4>{ hood } { housing }</h4>
                <p>{ price }</p>
                <Button onClick={onUnlike}>
                    Unlike
                </Button>
                <Button onClick={toggleImage}>
                    Show Images
                </Button>
                <div className={ showImage ? 'show-images' : 'hide-images' }>
                    {images.map((image, idx) => <img key={idx} src={image}></img>)}
                </div>
            </Card>
            <hr></hr>
        </React.Fragment>
    );
}

export default MyPlacesCard;