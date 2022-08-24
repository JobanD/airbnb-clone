import React from "react"

export default function Card(props){
    return(
        <div className="card">
        
            <img src={props.imageUrl} />
            
            <div className="textInfo">
            
                <div className="locationInfo">
                    <img src="../images/destination.png" />
                    <h3>{props.location.toUpperCase()}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h2>{props.title}</h2>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}