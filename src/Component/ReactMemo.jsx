import React, { useState } from "react";
function ReactMemo(){
    const [count,setCount]=useState(0)
    console.log("Count Update",count);

    return(
        <div><center><h1>React.Memo</h1></center>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}
export default React.memo(ReactMemo);