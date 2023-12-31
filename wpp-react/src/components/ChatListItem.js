import React from "react";
import './ChatListItem.css';

export default ({onClick, active, data}) => {
return(

<div className={`chatListItem ${active? 'active':''} `}
onClick={onClick}
>

    <img className="chatListItem--avatar" src={data.image} alt=" " />

        <div className="chatListItem--lines">

            <div className="chatListItem--line">

                <div className="chatListItem--name"> {data.title} </div>
                <div className="chatListItem--date"> 12:54 </div>

            </div>

            <div className="chatListItem--line">
            </div>
<div className="chatListItem--lastMsg">
    <p> Show de bola </p>
</div>
        
        </div>
    </div>

); 
}