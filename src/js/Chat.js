import {useEffect, useRef, useState } from 'react';

const Chats =({chat})=>{
  const chatBottom = useRef(null);
  const [displayOption, setDisplayOption] = useState(false);
  const handdleDisplayOption = () =>{
    setDisplayOption(prev=>!prev)
  }
  useEffect(()=>{
    chatBottom.current.scrollIntoView({block: "end"});
  },[chat])

  return(
    <div className='chats' onClick={handdleDisplayOption}>
      {chat.map(item => <div className='chat' key={item.key}><strong>
        あなた: </strong>{item.mesage}<br/>
        {displayOption?' ('+item.option+')':item.option[item.response]}</div>)}
      <div ref={chatBottom}></div>
    </div>
  );
}


const Textbox=({send})=>{
  const [question, setQuestion] = useState('');
  const [option, setOption] = useState('');
  const changeQuestion = event => setQuestion(event.target.value);
  const changeOption = event => setOption(event.target.value);

  const handleSend = ()=>{
    send(question,option);
    setQuestion('');
  }

  const onKeyUp = event =>{
    if (event.keyCode === 13) {
      handleSend();
    }
  }
  
  return(
    <div className='chatInputContainer' onKeyUp={onKeyUp}>
      <input type='text' 
      className = 'chatInput'
      placeholder='質問' 
      onChange={changeQuestion} 
      value={question}></input>

      <input type='text' 
      className = 'chatInput'
      placeholder='はい/いええ' 
      onChange={changeOption} 
      value={option}></input>

      <button
      className = 'chatBtn'
      onClick = {handleSend}
      >確認</button>
    </div>
  );
}


const Chat = ()=>{
  const [chat, setChat] = useState(()=>{
      let prev = localStorage.getItem("chat");
      return prev===null?[]:JSON.parse(prev);
    });
  const reset = ()=>setChat([]);
  const send = (question,option) =>{
      const request = (m,o) => {
          return {key: chat.length, mesage: m,option: o, response: Math.floor(Math.random()*o.length)};
      };
      if(question!=='' | option!==''){
        const patt = /[\s,]/
        let processOption = option.split(patt);
        processOption = processOption === null?[]:processOption; 
        setChat(prev=> [...prev, request(question,processOption)])  
    }
  }
  useEffect(()=>{
      localStorage.setItem('chat',JSON.stringify(chat));
  },[chat])

  return (
    <div className='chatBox text'>
      <strong>ペットに聞く:</strong>
      <button
        className = 'chatBtn'
        onClick = {reset}
        >リセット</button>
      <Chats chat={chat}/>
      <Textbox send={send}/>
    </div>
  );
}

export default Chat;