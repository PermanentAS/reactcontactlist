import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Item, Header, Image } from 'semantic-ui-react'

class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        let fullname = this.props.contact.general.firstName + this.props.contact.general.lastName;

        return(
            <div>
                {/* <img src={this.props.contact.general.avatar} alt='logo' /> */}
                {/* <li>{this.props.contact.general.firstName} {this.props.contact.general.lastName}</li> */}
                <Item>
                <Header as='h3' dividing>
                    <Image circular src={this.props.contact.general.avatar} /> {fullname}
                </Header>
                </Item>
            </div>
        );
    }
}

export default Contact;