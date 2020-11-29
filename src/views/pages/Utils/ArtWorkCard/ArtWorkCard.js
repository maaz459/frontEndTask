import React from 'react';
import './ArtWork.css'


const ArtWorkCard = (props) => {
    return (
        <div>
            <div className="artCard">
                <div className="text-center">
                    <img className='artImage' style={{ maxWidth: "80%", paddingTop: "10%", paddingBottom: "10%" }} alt="example" src={props.data.image} />
                    <div class="middle">
                        <div class="text">Frame Now</div>
                    </div>
                </div>
            </div>
            <p className="artText">{props.data.name}</p>
        </div >
    );
}

export default ArtWorkCard;