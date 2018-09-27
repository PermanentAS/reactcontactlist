import React, {Component} from 'react';
import ContactList from './ContactList';

const CLIENT_BASE = require('../clients.json');

class ContactListApp extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(           
            <div>
                <h1>Contact List App</h1>
                <ContactList clientBase={CLIENT_BASE}/>
            </div>
        );
    }
}

export default ContactListApp;