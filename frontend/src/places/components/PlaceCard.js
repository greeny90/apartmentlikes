import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './PlaceCard.css';

const PlaceCard = props => {
    const title = props.entry["result-title"];
    const hood = props.entry["result-hood"];
    const housing = props.entry["housing"];
    const price = props.entry["result-price"];
    //const images = props.entry["images"];

    return (
        <React.Fragment>
            <Card className='place-card'>
                <h3>{ title }</h3>
                <h4>{ hood } { housing }</h4>
                <p>{ price }</p>
                <Button onClick={props.onLike}>
                    Like
                </Button>
                <Button onClick={props.onPass}>
                    Pass
                </Button>
                <div style={{ 'margin-top': '10px'}}>
                    {props.entry["images"].map((image, idx) => <img key={idx} src={image}></img>)}
                </div>
            </Card>
        </React.Fragment>
    );
}

export default PlaceCard;