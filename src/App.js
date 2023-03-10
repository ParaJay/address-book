import './App.css';
import { useState } from "react";
import ContactsList from './Components/ContactsList';
import { randomUUID } from './utils';
import ContactCreator from './Components/ContactCreator';
import ContactView from './Components/ContactView';

const defaults = [
    { name: "Alan", uuid: randomUUID() },
    { name: "Aaron", uuid: randomUUID() },
    { name: "Barry", uuid: randomUUID() },
    { name: "Carl", uuid: randomUUID() },
    { name: "Connie", uuid: randomUUID() }
]

function App() {
    const [contacts, setContacts] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [view, setView] = useState(false);

    const isContact = (contact) => {
        if(contacts.includes(contact)) return true;

        for(let i = 0; i < contacts.length; i++) if(JSON.stringify(contacts[i]) === JSON.stringify(contact)) return true;

        return false;
    }

    const addContact = (e, name, number) => {      
        e.preventDefault();

        let contact = {
            name: name,
            number: number,
            uuid: randomUUID()
        }
        //TODO: check same number
        addWholeContact(contact);
    }
    
    const addWholeContact = (contact) => {
        if(isContact(contact)) return;

        console.log("adding contact");

        let c = [...contacts];
        c.push(contact);
        setContacts(c);
    }

    const removeContact = (contact) => {
        let c = [...contacts];
        c.splice(c.indexOf(contact), 1);
        setContacts(c);
    }

    const displayContent = (e) => {
        e.stopPropagation();
        document.getElementsByClassName("dropdown-content")[0].style.visibility = "visible";
    }

    const universalClick = () => {
        let ddc = document.getElementsByClassName("dropdown-content");

        for(let i = 0; i < ddc.length; i++) ddc[i].style.visibility = "hidden";
    }

    const CC = <ContactCreator onSubmit={addContact} onClose={() => setIsCreating(false)} isVisible={isCreating}></ContactCreator>;

    if(view) {
        return <div>
            <ContactView contact={view} onView={setView} onDelete={removeContact}></ContactView>
        </div>
    }

    return (
        <div className="wrapper" onClick={universalClick}>
            <div className="wrapper">
                <nav>
                    {CC}
                    <h2>Contacts</h2>
                    {
                    }
                </nav>

                <ContactsList contacts={contacts} onDelete={removeContact} onView={setView}></ContactsList>

                <div className="col-wrapper bottom right">
                    <div className="dropdown-content">
                        <button onClick={() => setIsCreating(true)}>createContact</button>
                    </div>

                    <button className="add-btn" onClick={displayContent}><b>+</b></button>                    
                </div>
            </div>            
        </div>
    );
}

export default App;
