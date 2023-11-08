import React from "react";
import './MenssageItem.css';

export default ({data, user }) => {
    return (

        <div
            className="menssageLine"
             style={{
            justifyContent: user.id === data.author ? "flex-end" : "flex-start"
            }}
        >

         <div className="menssageItem"
         
           style={{
            backgroundColor: user. id === data.author ? '#dcf8c6' : '#fff'
           }} 

         >
            <div className="menssageText"> {data.body} </div>
            <div className="menssageDate">23:00 </div>
        </div>
     </div>
    );
}