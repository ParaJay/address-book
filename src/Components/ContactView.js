const ContactView = (props) => {
    return (
        <div className="wrapper">
            <div className="centered">
                <h3>Name: {props.contact.name}</h3>
                <h3>Number: {props.contact.number}</h3>
            </div>

            <div className="centered">
                <button onClick={() => props.onView(null)}>Back</button>
                <button onClick={() => { 
                    props.onDelete(props.contact); 
                    props.onView(null);
                }}>Delete</button>
            </div>
        </div>
    )
}

export default ContactView;