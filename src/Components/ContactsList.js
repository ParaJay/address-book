import Contact from "./Contact";

const compareString = (a, b) => {
    if(a === b) return 0;

    for(let i = 0; i < a.length; i++) {
        if(i >= b.length) return -1;
        let aa = a.charAt(i);
        let bb = b.charAt(i);

        if(aa > bb) {
            return 1;
        } else if(aa < bb) {
            return -1;
        }
    }

    return 1;
}

const ContactsList = (props) => {
    let charMap = {};
    let components = [];

    let contacts = props.contacts.sort((a, b) => compareString(a.name, b.name));

    for(let i = 0; i < contacts.length; i++) {
        let contact = contacts[i].name;

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

        charMap[key].unshift(<h3 className="contact-header" key="h">{key}</h3>)
        components.push(charMap[key]);
    }

    return components;
}

export default ContactsList;