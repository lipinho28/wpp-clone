import React , {useState} from "react";
import './NewChat.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatList, show , setShow}) => {
const [list, setList]= useState ([
{id: 123, avatart: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png', name: 'felipe teixeira' },
{id: 123, avatart: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png', name: 'felipe teixeira' },
{id: 123, avatart: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png', name: 'felipe teixeira' },
{id: 123, avatart: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png', name: 'felipe teixeira' }, 

]);

const handleClose= () => {

    setShow(false);
}

    return(

<div className="newChat" style={{left: show?0:-415}}>
       <div className="newChat--head">
    <div onClick={handleClose} className="newChat--backbutton">

       <ArrowBackIcon style={{color: '#fff'}} />

    </div>
<div className="newChat--headtitle"> Nova conversa </div>

       </div>

       <div className="newChat--list">
          {list.map((item, key)=> (
        <div className="newChat--item" key={key}>

             <img className="newChat--itemavatar" src= {item.avatart} alt="" />
        <div className="newChat--itemname"> {item.name} </div>

             </div>
          ))}

       </div>

</div>

    );
}