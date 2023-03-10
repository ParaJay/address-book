import Contact from "./Contact";

function ContactsList(props) {
    let charMap = {};
    let components = [];

    let contacts = props.contacts.sort();

    for(let i = 0; i < contacts.length; i++) {
        let contact = contacts[i].name;

        console.log(contact);

        let char = contact.charAt(0).toUpperCase();

        if(!char.match(/[a-zA-Z]/)) char = "#";

        let arr = charMap[char];

        if(!arr) arr = [];

        arr.push(<Contact onDelete={() => props.onDelete(i)} text={contact} key={i} onView={() => props.onView(contacts[i])}></Contact>);

        charMap[char] = arr;
    }

    let keys = Object.keys(charMap).sort();

    for(let i = 0; i < keys.length; i++) {
        let key = keys[i];

        charMap[key].unshift(<h3 key="h">{key}</h3>)
        components.push(charMap[key]);
    }

    return components;
}

export default ContactsList;