import React ,{useState, useEffect} from "react";
import './App.css';
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';



export default () => {
  const [chatList, setChatList]= useState([
    {chatId: 1, title:'fulando de tal da silve pereira', image: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png'},
    {chatId: 2, title:'fulando de tal da silve pereira', image: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png'},
    {chatId: 3, title:'fulando de tal da silve pereira', image: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png'},
    {chatId: 4, title:'fulando de tal da silve pereira', image: 'https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png'},
  ]);
const [activeChat, setActiveChat]= useState({});
const [user, setUser]= useState(null);

const [showNewChat, setShowNewChat] =useState(false);

const handleNewChat = () => {
  setShowNewChat(true); 
}

const handleLoginData = async (u) => {
  let newUser = {
    id: u.uid,
    name: u.displayName,
    avatar: u.photoURL
  };
//
setUser(newUser);
}

if(user === null){
  return (<Login onReceive={handleLoginData}  />)

}

  return(



    <div className="app-window">
    <div className="sidebar">
<NewChat 
chatList={chatList}
user={user}
show={showNewChat}
setShow={setShowNewChat}
/>


<header>
  <img className="avatar"  src= {user.avatar} alt=" " />
<div className="buttons">

  <div className="btn">
<DonutLargeIcon style={{color: '#919191'}}/>
  </div>

  <div onClick={handleNewChat} className="btn">
<ChatIcon style={{color: '#919191'}}/>
  </div>

  <div className="btn">
<MoreVertIcon style={{color: '#919191'}}/>
  </div>
  
  
</div>

<NewChat/>

</header>

<div className="search">
  <div className="search--input">
    <SearchIcon fontSize="small" style={{color: '#919191'}}/>
    <input type="search" placeholder="procurar ou começar uma nova conversa"/> 
  </div>

  <div className="chatList">
{chatList.map((item, key)=>(

<ChatListItem
key={key}

data={item}

active={activeChat.chatId === chatList[key]. chatId}

onClick={()=>setActiveChat(chatList[key])}

/>

))}
  </div>
</div>
    </div>
    <div className="contentarea">
      {activeChat.chatId !== undefined &&  
      <ChatWindow 
        user={user}
      />
      }

      {activeChat.chatId=== undefined && 
<ChatIntro /> 
}

    </div>
    </div>
  );
}