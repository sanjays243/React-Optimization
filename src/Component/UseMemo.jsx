import { useMemo, useState } from "react";

function UseMemo(){
    const [count,setCount]=useState(0)
    const [number,setnumber]=useState(10)

    const result=useMemo(()=>{
        console.log("Calculation Running...");
        
        return number*2
    },[number])
    return(
        <div><hr />
        <center><h1>Use Memo</h1></center>
            <h1>Count : {count}</h1>
            <h1>Result : {result}</h1>

            <button onClick={()=>setCount(count+1)}>Click</button>
            <button onClick={()=>setnumber(number+5)}> Change Number</button>
        </div>
    )
}
export default UseMemo;