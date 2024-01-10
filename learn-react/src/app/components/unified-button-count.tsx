"use client";
import { useState } from "react";

function Parent_Count (){
    // Set initial usestate
    const[count, setCount] = useState(0);

    // Handle click function, increment count by 1
    function handleClick() {
        setCount(count + 1);
    }

    // return
    return(
        <div>
            <MiniButton count={count} onClick={handleClick}/>
        </div>
    );
}

function MiniButton({count, onClick}){
    return(
        <button onClick={handleClick} />
    );
}

export default Parent_Count