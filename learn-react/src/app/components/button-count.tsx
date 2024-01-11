// Use client side rendering
'use client';
// useState import
import { useState } from "react";

// MyButtonCount component
function MyButtonCount(){
    const[count, setCount] = useState("true");

    // function to handle click
    function handleClick(){
        if (count == "true"){
            setCount("false");
        }
        if (count == "false"){
            setCount("true");
        }
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={handleClick}>
                Clicked {count} times...
            </button>
        </div>
    );
};

// Export component
export default MyButtonCount;