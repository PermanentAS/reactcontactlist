import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Tab } from 'semantic-ui-react';
import ListInfo from './ListInfo';
import './ContactList.css'
import Contact from './Contact';


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

        const semanticTabs = filteredContacts.map((contact, index)=> {           
            return  ({ 
                        menuItem: { key: index, 
                                    content: <Contact contact={contact} />,
                                  },
                        render: ()=> <Tab.Pane> <ListInfo contact={contact} /> </Tab.Pane>,
                    });
        });

        return(
            <div className="">
                <Input  placeholder='Search...' 
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)} 
                        className="search-input"  
                />         
                
                <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={semanticTabs}/>
            </div>
        );
    }
}

export default ContactList;