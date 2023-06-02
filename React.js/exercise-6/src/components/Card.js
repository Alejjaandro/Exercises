import React from 'react'

export default function Card (props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.imgURL} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.paragraph}</p>
                <a href={props.buttonURL} className="btn btn-primary" target="_blank">{props.buttonTXT}</a>
            </div>
        </div>
    )
}