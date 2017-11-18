/**
 * Created by SLEEK on 5/17/2017.
 */
import React from "react";
import firebase from 'firebase';



class CreateTodo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }


    handleCreate(ev){
        ev.preventDefault();

        //the const below for createInput task and validate input is used to cache
        // the following so that they can be validated

        //this is the section that handles the posting to firebase
        // var firebaseRef = firebase.database().ref('pop/arr1/trial' + key + "/trial").child('trial');
        var firebaseRef = firebase.database().ref('pop/arr5');
        const messageText = {
            trial: this.refs.createInput.value,
            isCompleted: false
        }
        firebaseRef.push().set(messageText);
        this.setState({messageText: ""});

        this.refs.createInput.value = '';
        this.refs.createInput.focus();
    }


    //this.refs.createInput.value = ''; is used to clear out the form after logging in a todo.

    render(){
        return (
           <form onSubmit={this.handleCreate.bind(this)}>
               <input ref="createInput" type="text" placeholder="What do I need to do?" />
               <button>Create</button>
           </form>
        );
    }
}

export default CreateTodo;


//create todo is defined in the app section and parsed create todo section
// render takes the input and parse it on to the handle submit a
//the input is being called for rendering in the app section