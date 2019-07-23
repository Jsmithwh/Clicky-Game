import React from 'react';
import "./Card.css";

class Card extends React.Component {

    state = {
        here:"here"
    }

    render(){
        return (

            <div onClick={(e) => this.props.cardClick(this.props.id)} id={this.props.id} className="card">

                <p>{this.props.id}</p>
                <img src={this.props.src} alt=""/>


            </div>

        )

    }

}

export default Card;