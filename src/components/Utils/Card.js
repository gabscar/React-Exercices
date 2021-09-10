

import React from "react";


import style from './Card.module.css'



class Card extends React.Component{

    render(){
        return(
            <div className={`${style.card} ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}


export default Card;