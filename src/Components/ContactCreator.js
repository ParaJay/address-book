import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ContactCreator = (props) => {
    let subtitle;
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");

    function afterVisible() {
        // subtitle.style.color = '#f00';
    }

    function dispose() {
        setIsVisible(false);
        props.onClose();
    }

    const onSubmit = (e) => {
        props.onSubmit(e, text, number)
        dispose(props.onClose);
    }

    if (props.isVisible && !isVisible) {
        setIsVisible(true);
    }

    return (
        (<Modal
        isOpen={isVisible}
        onAfterOpen={afterVisible}
        onRequestClose={dispose}
        style={customStyles}
        contentLabel="Existing Note"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Enter Contact Information</h2>
            <div className="wrapper">
                <form onSubmit={onSubmit}>
                    <input className="contact-input" placeholder='enter name' onChange={(e) => setText(e.target.value)} required></input>
                    <input type="tel" className="contact-input" placeholder='enter phone number' onChange={(e) => setNumber(e.target.value)}  pattern="[0-9]{11}" required></input>
                    <input type="submit" value="Create"></input>
                    <div>
                        <button onClick={dispose}>Back</button>
                    </div>
                </form>
            </div>
        </Modal>
        )
    );
}

export default ContactCreator;