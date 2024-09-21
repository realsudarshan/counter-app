import { useEffect, useState } from "react";
import './Homepage.css'
const Homepage=()=>{
    const[count,setcount]=useState<number>(0);
    const[timer,settimer]=useState<number>(0);
    useEffect(()=>{
        if (timer==0) return;
        const interval=setInterval(()=>{settimer(timer-1)},1000);
        return(()=>clearInterval(interval));
        },[timer])
        function counterfn(){
            if(timer!=0){
                setcount(count+1);
                
            }
        }
    return(
        <>
        
    <h1  id="heading">Counter</h1>
    <div className="home-title">
    <h3  id="subheading1">timer:<p className="value">{timer}</p></h3>
    <h3  id="subheading2">count:<p className="value">{count}</p></h3>
    </div>
    <div className="button-container">
    <button onClick={()=>{settimer(10)}} disabled={timer!==0} className="mybutton">Start</button>
    <button onClick={counterfn} className="mybutton">Click me</button>
    <button onClick={()=>{
        if(timer!=0) return;
        setcount(0)}} className="mybutton">Reset</button>
        </div>
    </>
)
}
export default Homepage;