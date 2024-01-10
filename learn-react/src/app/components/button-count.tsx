// Use client side rendering
'use client';
// useState import
import { useState } from "react";

// MyButtonCount component
function MyButtonCount(){


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