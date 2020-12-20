import {useEffect, useState} from 'react';

const A2HS = ()=>{
    const [display, setDisplay] = useState('none');
    let deferredPrompt;
    useEvent('beforeinstallprompt', (e)=>{
        e.preventDefault();
        deferredPrompt = e;
        setDisplay('block');
    })
    const handleOnClick = ()=>{
        if(display==='block'){
            // hide our user interface that shows our A2HS button
            setDisplay('none');
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the A2HS prompt');
                } else {
                  console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
              });

        }
    }
    return (
        <button
        className='add-button'
        style={{display}}
        onClick={handleOnClick}
        >Add to home screen</button>
    )
}

const useEvent=(event, handler, passive = false)=> {
    useEffect(() => {
      // initiate the event handler
      window.addEventListener(event, handler, passive)
  
      // this will clean up the event every time the component is re-rendered
      return function cleanup() {
        window.removeEventListener(event, handler)
      }
    })
  }

export default A2HS;