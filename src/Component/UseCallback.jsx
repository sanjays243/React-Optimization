import { useCallback, useState,memo } from "react"

const Child=memo(function Child({handleClick}){
    console.log("Child Rendered");

    return <button onClick={handleClick}>Click Child</button>
    
})
function UseCallback(){
    const [count,setCount]=useState(0)

    const handleClick=useCallback(()=>{
        console.log("Child Button Clicked");
        
    },[])
    return(
        <div>
            <hr />
            <center><h1>Use Callback</h1></center>

            <h1>{count}</h1>

            <button onClick={()=>setCount(count+1)}>Increase</button>

            <Child handleClick={handleClick}/>
        </div>
    )
}
export default UseCallback;