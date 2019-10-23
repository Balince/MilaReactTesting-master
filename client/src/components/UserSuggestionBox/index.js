import React, { Component } from "react";
import "./style.css"
import { Input } from "../Form";
import API from "../../utils/API";

class UserSuggestionBox extends Component {

    state = {
        body: "",
        username: "",
        subject: ""
        
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();


          API.saveSuggestionsBox({
            body: this.state.body,
            username: this.state.username,
            subject: this.state.subject,
            
        })
        .then(res => console.log("Successfully added suggestion"))
        .catch(err => console.log)
    }

    

    render() {
        return (
            
            <div className="card bg-dark text-white">
                <form>
                    <h5>Input your suggestion here</h5>
                    <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Your email goes here" />
                    <Input value={this.state.subject} onChange={this.handleInputChange} name="subject" placeholder="Subject" />
                    <Input value={this.state.body} onChange={this.handleInputChange}  name="body" placeholder="Enter suggestions" />
                 
                    
                    <button onClick={this.handleFormSubmit}>Submit your Suggestion</button>
                </form>
            </div>
            
        )
    }
}

export default UserSuggestionBox