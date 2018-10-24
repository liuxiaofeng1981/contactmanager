import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from './../../context';

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: 'Joe Doe',
  //         email: 'jdoe@gmail.com',
  //         phone: '555-555-5555'  
  //       }, 
  //       {
  //         id: 2,
  //         name: 'Xiaofeng Liu',
  //         email: 'xiaofeng@gmail.com',
  //         phone: '139-888-899'  
  //       },        
  //       {
  //         id: 3,
  //         name: 'Evelyn Muyi',
  //         email: 'eve@gmail.com',
  //         phone: '999-888-8899'  
  //       }        
  //     ]
  //   };
  // }
  
  // deleteContact = id => {
  //   const { contacts } = this.state;
    
  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   this.setState({ 
  //     contacts: newContacts 
  //   });
  // };
  
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => 
                <Contact 
                  key={contact.id} 
                  contact={contact} 
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)} 
                />  
              )}
            </React.Fragment>
          );  
        }}
      </Consumer>
    );
    
    
    
    // BELOW WAS THE ORIGINAL WAY USING COMPONENT STATE
    // const { contacts } = this.state;

    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => 
    //       <Contact 
    //         key={contact.id} 
    //         contact={contact} 
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)} 
    //       />  
    //     )}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
