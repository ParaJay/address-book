import { useState } from "react";

const Form = (props) => {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");

    const submit = (e) => {
        e.preventDefault();

        props.onSubmit(text, number);
    }

    return (
        <form onSubmit={submit} className="centered">
            <input className="contact-input" placeholder='enter name' onChange={(e) => setText(e.target.value)} required></input>
            <input type="tel" className="contact-input" placeholder='enter phone number' onChange={(e) => setNumber(e.target.value)}  pattern="[0-9]{11}" required></input>
            <input type="submit"></input>
            <div>
                <button onClick={props.onBack}>Back</button>
            </div>
        </form>
    )
}

export default Form;