import React from 'react';
import './CartCards.css'


const CartCard = (props) => {
    return (<h1>
        <div>
            <div className="cartCard">
                <div className="text-center">
                    <img className='cartImage' style={{ maxWidth: "80%", paddingTop: "10%", paddingBottom: "10%" }} alt="example" src={props.image} />
                    <div class="cartTextWrapper">
                        <div class="cartFrame">{props.type}</div>
                    </div>
                    <div className="cartHeart" ><i style={{ fontSize: "20px" }} class="far fa-heart"></i>

                    </div>
                </div>
            </div>
            <p className="cartText">{props.name}</p>
        </div >
    </h1>);
}

export default CartCard;