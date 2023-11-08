import React, {useState, useEffect, useRef} from "react";
import './ChatWindow.css';
import EmojiPicker from 'emoji-picker-react';

import MenssageItem from "./MenssageItem";
 
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';


export default ({user}) => {
const body = useRef ();
    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

const [emojiOpen, setEmojiOpen] = useState(false);
const [text, setText]= useState('');
const [listening, setListening]= useState(false);
const [list, setList]= useState([
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
    {author: 123, body:'show de bola'},
    {author: 123, body:'bacana'},
    {author: 1234, body:'show de bola isso ae'},
]);

   useEffect(()=>{
   if (body.current.scrollHeight > body.current.offsetHeight ){
       body.current.scrollRop = body.current.scrollHeight - body.current.offsetHeight;
   }

   },[list]);

        const handleEmojiClick = (e, EmojiObjects) => {
          setText( text + EmojiObjects.emoji);
        }

    

const handleOpenEmoji = () => {
    setEmojiOpen(true);
}

const handleCloseEmoji = () => {
    setEmojiOpen(false);
}

const handleMicClick = () => {
if (recognition!== null){


    recognition.start();

    recognition.onstar= () => {
       setListening(true);
    }
        recognition.onend = () => {
            setListening(false);
        }

       recognition.onresult = (e) => {
            setText( e.results[0] [0].transcript );
      }


}
}

const handleSendClick = () => {


}

    return(
    <div className="chatWindow">
    <div className="chatWindow--header">

<div className="chatWindow--headerinfo">
    <img className="chatWindow--avatar" src="https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png" alt="" />
    <div className="chatWindow--name">Felipe teixeira</div>
</div>

<div className="chatWindow--headerbuttons">

<div className="chatWindow--btn">
    <SearchIcon style={{color: '#919191'}}  />
</div>

<div className="chatWindow--btn">
    <AttachFileIcon style={{color: '#919191'}}  />
</div>

<div className="chatWindow--btn">
    <MoreVertIcon style={{color: '#919191'}}  />
</div>


</div>

    </div>
    <div ref={body} className="chatWindow--body">
        {list.map((item, key) =>(

           <MenssageItem 
           key={key}
           data={item}
           user={user}
           />
        ))}
    </div>


<div className="chatWindow--emojiarea" style={{height: emojiOpen ? '200px' : '0px' }} >

<EmojiPicker 
    onEmojiClick={handleEmojiClick}
     searchDisabled
    skinTonesDisabled
/>

    </div>
    <div className="chatWindow--footer">

<div className="chatWindow--pre">

<div className="chatWindow--btn"

onClick={handleCloseEmoji}
style={{width: emojiOpen ? 40:0}}

>
    <CloseIcon style={{color: '#919191'}}  />
</div>

<div className="chatWindow--btn"
onClick={handleOpenEmoji}
>
    <EmojiEmotionsIcon style={{color: emojiOpen?'#009688':'#919191'}}  />
</div>

</div>


<div className="chatWindow--inputarea">
    <input className="chatWindow--input" 
    value={text}
    onChange={e=>setText(e.target.value)}

 type="text"
placeholder="digite uma mensagem"
 />

</div>

<div className="chatWindow--pos">


{text=== ''&&
<div onClick={handleMicClick}  className="chatWindow--btn">
    <MicIcon style={{color: listening ? '#126ece': '#919191'}}  />
</div>
}

{text !== ''&&
<div onClick={handleSendClick}  className="chatWindow--btn">

    <SendIcon style={{color: '#919191'}}  />
</div>
 }

</div>

    </div>
</div>


    );
}