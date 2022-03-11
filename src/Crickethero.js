import React ,{useEffect, useState}from 'react';
import './crickethero.css';
import india from './india.png';
import australia from './australia.png';

function Crickethero() {
    const [count, setCount] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [startRun, setStartRun] = useState(0);
    const [wicket, setWicket] = useState(0);
    // const [player, setplayer] = useState(0);
    
    useEffect(() => {
      if(startTimer){
        let increase = 0;
        if(count.toString().includes("5")){
          increase = Number(count) + 0.5;
        }
        // console.log(count);
        // console.log("rest",Math.floor(Math.random() *11 ));
        let timer = setTimeout(() => {
          setCount((count) => increase ? increase : (Number(count)
           + 0.1).toFixed(1));
           setStartRun(Math.floor(Math.random() * 7)+ startRun);
           if(Math.floor(Math.random() *11 ) === 10){
            setWicket(wicket +1);
            console.log("wicket",wicket);
           }
           if(count === 10){
            setCount(count);
            setStartRun(startRun);
            setWicket(wicket);
          }
          if(wicket === 10){
            setCount(count);
            setStartRun(startRun);
            setWicket(wicket);
          }
        }, 1000);

        return () => {
          clearTimeout(timer);
        };
      }
    })
    const handleScore = () =>{
        setStartTimer(true);
        setStartRun(true);
        setWicket(0);
    }
  return (
    <div>
        <div className='whole-ctn'>
            <div className='head-sec'>Cricket Score Board</div>
            <div className='mid-sec'>
                Live score here!   
            </div>
            <div className='country-sec'>
                <div>
                <img src={india} alt="indian-flag" className='india-flag'/>
                <span className='ind-style'>India</span></div>
                <span className='vs-style'>vs</span>
                <div>
                <img src={australia} alt="australia-flag" className='australia-flag'/>
                <span  className='aus-style'>Australia</span></div>
            </div>
            <div className='tab-sec'>
<ul className='tab-design'>
    <li>Runs-{startRun}</li>
    <li>wickets-{wicket}</li>
    <li>balls-{count}</li>
</ul>
            </div>
            <button onClick={handleScore} className='score-style'>see the score</button>
        </div>
    </div>
  )
}

export default Crickethero;