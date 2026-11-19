import {useState} from "react";

export default function Counter()
{
    
    let [count,setCount]=useState(0); //let [stateVariable,setstateVariable]=useState(0);   basic syntax for the use state
    
   let incCount= ()=>{
       //count=count+1;// isase hamare counter me chaneg nahi ayega
       // hame hamare set count method ko  update karna pdega 
       setCount(count+1);//hi pan best practice nahi ahe but nntr apan shiku halu halu 
       console.log(count);
   };

    return (
        <div>
            <h1>count={count}</h1>
            <button onClick={incCount}>increse count</button>
        </div>
    );
}