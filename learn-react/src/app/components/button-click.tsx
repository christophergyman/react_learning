'use client';
// Button click component
function MyButtonClick(){

    // Onclick function 
    function handleClick() {
        alert("you clicked me!");
    }

    // Return component
    return(
        <div>
            <button 
            onClick={handleClick} className="btn btn-secondary">
                Click me!
            </button>
        </div>
    )
}

export default MyButtonClick