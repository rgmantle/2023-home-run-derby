import React from "react";
import './Card.css'

const Card =({
    player_id,
    player_name,
    hr,
    group
}) => {
    return (
        <div className="Card">
            <div className="info">
                <p className="header">
                    { player_name } - Group {group} 
                </p>
                <p className="type">
                    2022 Total: {hr}
                </p>
            </div>
            <img className="preview" src={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${player_id}/headshot/67/current`} /> 
            <div>
                <button>(+)Add to Lineup</button>
                <button>(-)Remove from Lineup</button>
            </div>
        </div>
    )
}

export default Card