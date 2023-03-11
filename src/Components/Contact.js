const Contact = (props) => {
    return <div onClick={props.onView}><p className="bordered rounded contact">{props.text}</p></div>
}

export default Contact;