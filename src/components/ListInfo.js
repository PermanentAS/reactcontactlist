import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image, Grid } from 'semantic-ui-react';


class ListInfo extends Component{
    render(){
        return(
            <Grid className="main-block">
                <Grid.Column width={4}>
                    <Image src={this.props.contact.general.avatar} 
                           size='medium' 
                           circular 
                           className="tab__image" 
                           verticalAlign='middle'
                    />
                </Grid.Column>
                <Grid.Column width={12}>
                    <h1>{this.props.contact.general.firstName + " " + this.props.contact.general.lastName}</h1>
                    <h2>Job</h2>
                    <p>Company: {this.props.contact.job.company}</p> 
                    <p>Position: {this.props.contact.job.title}</p>
                                        
                    <h2>Contact</h2>
                    <p>E-mail: {this.props.contact.contact.email}</p> 
                    <p>Phone: {this.props.contact.contact.phone}</p>
                                        
                    <h2>Address</h2>
                    <p>Street: {this.props.contact.address.street}</p>
                    <p>City: {this.props.contact.address.city}</p>
                    <p>Zip Code: {this.props.contact.address.zipCode}</p>
                    <p>Country: {this.props.contact.address.country}</p>
                </Grid.Column>
            </Grid>
        );
    }
}

export default ListInfo;