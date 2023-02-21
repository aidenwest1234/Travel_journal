import React from "react"

export default function Cards(props) {
    
return (
        <div className="card">
            <img src={`../Images/${props.coverImg}`} 
            className="card--image" />
            <div className='card--info'>
                <span className="card--location">{props.location}</span> 
                <a href="https://goo.gl/maps/fWvzU8pYQALb2sQR9" className="card--location1">{props.googleMapsUrl}</a>
                <a href="https://goo.gl/maps/x5ZvsM6EPxQRVZH7A" className="card--location2">{props.googleMapsUrl2}</a>
                <a href="https://goo.gl/maps/jWvVnochVgNoJmLcA" className="card--location3">{props.googleMapsUrl3}</a>
                <span className="card--title">{props.title}</span>
                <span className="card--date">{props.Date}</span>
                <div>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>    
        </div> 
    )
}