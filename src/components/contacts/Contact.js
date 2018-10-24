import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import './contact.css';
import { Consumer } from './../../context';
import axios from 'axios';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired 
    // deleteClickHandler: PropTypes.func.isRequired
  };

  // can also do
  // static defaultProps = {...};

  // constructor() {
  //   super();
  //   this.state = {};

  //   this.onShowClick = this.onShowClick.bind(this);
  // }

  state = {
    showContactInfo: false
  };

  // onShowClick() {
  //   console.log(this.state);
  // }

  // onShowClick = e => {
  //   // console.log(this.state);
  //   // console.log(e.target);
  //   // console.log(name);
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({
        type: 'DELETE_CONTACT',
        payload: id 
      });
    } catch (e) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id 
      });
    }
        
    // this.props.deleteClickHandler();  
  };
  
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
            <h4>
              {name} 
              <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
              <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i>
              <Link to={`contact/edit/${id}`}>
                <i 
                  className="fas fa-pencil-alt" 
                  style={{
                    cursor: 'pointer', 
                    float: 'right', 
                    color: 'black', 
                    marginRight: '1rem'
                  }} 
                ></i>
              </Link>
            </h4>
            {showContactInfo ? (
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            ) : null}
          </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
