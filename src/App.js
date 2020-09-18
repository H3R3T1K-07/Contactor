import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    formSubmit = (e) => {
      e.preventDefault()

      this.setState({
          buttonText: '...sending'
      })

      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      
      axios.post('API_URI', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }

    render() {
        return(
           <>
              <form onSubmit={(e) => this.formSubmit(e)}>
                <label htmflFor="name"> Name </label>
                <input 
                  onChange={e => this.setState({name: e.target.value})}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={this.state.name}
                /> 
                <br />
                <label htmflFor="email"> Email </label>
                <input 
                  onChange={e => this.setState({email: e.target.value})}
                  name="name"
                  type="email"
                  placeholder="Your email"
                  required
                  value={this.state.email}
                />
                <br/>
                <label htmflFor="message"> Message </label>
                <textarea 
                  onChange={e => this.setState({message: e.target.value})}
                  name="message"
                  type="text"
                  placeholder="Please write your message here"
                  required
                  value={this.state.message}
                />
                <br/>
                <div>
                  <button type="submit">{this.state.buttonText}</button>
                </div> 
                
              </form>

           </>
        );
    }
}

export default Contact;