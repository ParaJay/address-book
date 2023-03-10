const Contact = (props) => {
    return <p onClick={props.onView} className="bordered contact">{props.text}</p>
}

export default Contact;