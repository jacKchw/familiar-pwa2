import {useEffect, useRef, useState } from 'react';

const Chat = ()=>{
    const chatBottom = useRef(null);
    const [question, setQuestion] = useState('');
    const [option, setOption] = useState('');
    const [chat, setChat] = useState(()=>{
      let prev = localStorage.getItem("chat");
      return prev===null?[]:JSON.parse(prev);
    });

    const changeQuestion = event => {
      setQuestion(event.target.value);
    };
  
    const changeOption = event => {
      setOption(event.target.value);
    };
  
    const send = () =>{
        const request = (m,o) => {
            return {key: chat.length, mesage: m,option: o, response: Math.floor(Math.random()*o.length)};
        };

        if(question!=='' | option!==''){
          const patt = /\S+/g;
          let processOption = option.match(patt);
          processOption = processOption === null?[]:processOption; 
          setChat(prev=> [...prev, request(question,processOption)])  
          setQuestion('');
      }
    }

    const onKeyUp = event =>{
        if (event.keyCode === 13) {
            send();
        }
    }
    const reset = ()=>{
      setChat([]);
    }
    useEffect(()=>{
        chatBottom.current.scrollIntoView({block: "end"});
        localStorage.setItem('chat',JSON.stringify(chat));
    },[chat])

    return (
      <div 
      className='chatBox text'>
        <strong>ペットに聞く:</strong>
        <button
          className = 'chatBtn'
          onClick = {reset}
          >リセット</button>
        
        <div className='chats'>
          {chat.map(item => <div className='chat' key={item.key}><strong>あなた: </strong>{item.mesage}<br/>{item.option[item.response]}</div>)}
        <div ref={chatBottom}></div>
        </div>
        <div className='chatInputContainer'>

          <input type='text' 
          className = 'chatInput'
          placeholder='質問' 
          onChange={changeQuestion} 
          onKeyUp={onKeyUp}
          value={question}></input>

          <input type='text' 
          className = 'chatInput'
          placeholder='はい/いええ' 
          onChange={changeOption} 
          onKeyUp={onKeyUp}
          value={option}></input>

          <button
          className = 'chatBtn'
          onClick = {send}
          >確認</button>
        </div>
      </div>
    )
  }

export default Chat;