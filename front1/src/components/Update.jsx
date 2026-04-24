import { useState } from "react";
import "../components/Update.css"

function Update(){
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    
    const sendMessage = async () => {
        const finalMessage = message + "menu";
        
        const res = await fetch(
            `http://localhost:8000/producer/menu?message=${encodeURIComponent(finalMessage)}`);
            
        const data = await res.text();
            
        setResponse(data);
        setMessage("");
    };

    return (
        <div className="container">
            <h1>ADD NEW ITEMS</h1>
            <input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}placeholder="New dice model "
                className="inputStyle"
            />
            <button 
                onClick={sendMessage}
                className="buttonStyle"
            > UPDATE </button>
        </div>
    );
}

export default Update;