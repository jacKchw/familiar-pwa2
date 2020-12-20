import {useEffect, useState} from 'react';

const Hunger = ()=>{
    //handle hunger count
    const hungryMax = 10*60*60*1000;
    const healthMax = 10*60*60*1000;
    const rederingSpeed = 60*1000;
  
    //handle hunger
    const  [hungryCount, setHungryCount] = useState(()=>{
      let prevHungryCount = localStorage.getItem("hungryCount");
      if (prevHungryCount===null | isNaN(Number(prevHungryCount))){
        return hungryMax;
      }else{
        const hungryTimestamp = localStorage.getItem("hungryTimestamp");
        let count = prevHungryCount - (Date.now() - hungryTimestamp);
        return count>=hungryMax?hungryMax:count<0?0: count;      
      }
    });
    const displayHungry =()=> Math.round(hungryCount*5/hungryMax);
    const updateHungry = (i)=>{
      //feed the familiar
      setHungryCount(prev=>{
        let count = prev + i;
        return count>=hungryMax?hungryMax:count<0?0: count;
      });
    }
    const handleClickHungry =()=>{
      updateHungry(60*60*1000);
    }
    useEffect(()=>{
      localStorage.setItem('hungryCount',hungryCount)
      localStorage.setItem('hungryTimestamp',Date.now());
    },[hungryCount]);
  
  
    //handle health
    const  [healthCount, setHealthCount] = useState(()=>{
      let prevHealthCount = localStorage.getItem("healthCount");
      if (prevHealthCount===null | isNaN(Number(prevHealthCount))){
        return healthMax;
      }else if (hungryCount>0){
        return prevHealthCount;
      }else{
      prevHealthCount = Number(prevHealthCount)
      const healthTimestamp = localStorage.getItem("healthTimestamp");
      const prevHungryCount = localStorage.getItem("hungryCount");
      const hungryTimestamp = localStorage.getItem("hungryTimestamp");
  
      let newHungryCount = prevHungryCount - (Date.now() - hungryTimestamp);
      let count = (prevHealthCount + newHungryCount) - (Date.now() - healthTimestamp)
      return count>=healthMax?healthMax:count<0?0: count;
      }
    });
    const displayHealth =()=> Math.floor(healthCount*5/healthMax);
    const updateHealth = (i)=>{
      setHealthCount(prev=>{
        let count = prev + i;
        return count>=healthMax?healthMax:count<0?0: count;
      });
    }
    const handleClickHealth =()=>{
      updateHealth(60*60*1000);
    }
    useEffect(()=>{
      localStorage.setItem('healthCount',healthCount)
      localStorage.setItem('healthTimestamp',Date.now());
    },[healthCount]);
  
    useEffect(()=>{
      //update hungry count evry x seconds
      if (hungryCount>0) {
        const interval = setInterval (()=>{
          updateHungry(-rederingSpeed);
        }
          , rederingSpeed);
        return(()=>clearInterval(interval))
      }else if (healthCount>0){
        const interval = setInterval (()=>{
          updateHealth(-rederingSpeed);
        }
          , rederingSpeed);
        return(()=>clearInterval(interval))
      }
    });
  
    return(
      <div className='text feed'>
      <strong>満腹度:</strong> {'🍖'.repeat(displayHungry())} {displayHungry()===0 &&'（空腹！😨）'}
      <br/>
      <strong>健康度:</strong> {'❤ '.repeat(displayHealth())} {displayHealth()===0 &&'（瀕死！💀）'}
      <br/>
      <button 
      type='button'
      onClick={handleClickHungry}
      >食事</button>
  
  <button 
      type='button'
      onClick={handleClickHealth}
      >治療</button>
      </div>
    );
  }
  
export default Hunger;