import React, {Component} from 'react';
import Contact from './Contact'
import 'semantic-ui-css/semantic.min.css';
import { Input, Item } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class ContactList extends Component{
    constructor(props){
        super(props);

        this.state = {
            search: '',
            filteredContacts: this.props.clientBase,
        }
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 20),
        });
    }

    

    render(){
        let filteredContacts = this.props.clientBase.filter(
            (contact) => {
                let fullName = contact.general.firstName + contact.general.lastName;
                return fullName.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );

        

        console.log(this.state.filteredContacts);

        return(
            <div>
                <Input  placeholder='Search...' 
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}   
                />
                <Item.Group divided>
                    {filteredContacts.map((contact, index)=> {
                        return <Contact key={index} contact={contact} />
                    })}
                </Item.Group>
                
                
            </div>
        );
    }
}

export default ContactList;