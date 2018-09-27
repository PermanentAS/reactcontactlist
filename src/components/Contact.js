import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Image } from 'semantic-ui-react'
import './ContactList.css'

class Contact extends Component{
    render(){
        let fullname = this.props.contact.general.firstName + "  " + this.props.contact.general.lastName;

        return(
            <Header as='h3'><Image src={this.props.contact.general.avatar} 
                                   size='medium' 
                                   circular 
                                   className="tab__image" 
                                   verticalAlign='middle'
                            />
                    {fullname}
            </Header>
        );
    }
}

export default Contact;