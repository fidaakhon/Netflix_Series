import React from "react";

function Card(props) {
    return (
        <>
        
            <div className="Cards">
                <div className="card">
                    <img src={props.imgsrc} alt="Mypic" className="card_image" />
                    <div className="card_info">
                        <span className="card_category"></span>
                        <h4 className="card_title">{props.title}</h4>
                        <a href={props.url} target="_blank">
                            <button className="btn">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Card;