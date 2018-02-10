/**
 * Created by SLEEK on 4/17/2017.
 */
import React from 'react';
import CreateTodo from './create-todo';
import firebase from 'firebase';
import TodosList from "./todos-list";
import {Collection} from 'react-materialize'

// Create a firebase db to store data, replace the db info in this tutorial with your firbase db info

const config = {
    apiKey: "AIzaSyBmL1q2aDX_U4Ai_axqUh4iaGfFCvPbvfw",
    authDomain: "todo-list-f911d.firebaseapp.com",
    databaseURL: "https://todo-list-f911d.firebaseio.com",
    projectId: "todo-list-f911d",
    storageBucket: "todo-list-f911d.appspot.com",
    messagingSenderId: "260866467960"
};
firebase.initializeApp(config);

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentWillMount(){
        firebase.database().ref('/pop/arr5').on('value', (snapshot)=> {
            const items = snapshot.val();
            this.setState({
                items: items,
                checked: true,
            });
        });
    }

    componentWillUnmount() {
        this.firebase.off();
    }

    toggleTrial(key) {
        const task = this.state.items[key];
        const foundItem = task;
        foundItem.isCompleted = !foundItem.isCompleted;
        firebase.database().ref().child('pop').child('arr5').child(key).update({isCompleted: foundItem.isCompleted});
        this.setState({
            clicked: true
        });
    }

    saveTrial (key, newTask) {
        const foundTodo = this.state.items[key];
        foundTodo.trial = newTask;
        firebase.database().ref().child('pop').child('arr5').child(key).update({trial: foundTodo.trial});
        this.setState({
            clicked: true
        });
    }

    deleteFirebase(key){
        console.log(this.state.items[key].trial, 'trial');
        if (confirm("Delete Todo task " + this.state.items[key].trial + "?")) {
            return (firebase.database().ref('/pop/arr5/' + key ).remove()
                .then(() =>{
                    console.log("Remove succeeded.")
                })
                .catch((error) =>{
                    console.log("Remove failed: " + error.message)
                }));
            //noinspection UnreachableCodeJS
            this.setState({
                clicked: true
            });
            return false;
    }}

    render() {
        // console.log(this.state.items);
        return (
            <div className="body">
                <h2>Todo App</h2>
                <CreateTodo items={this.state.items} />
                <Collection>
                    <TodosList items={this.state.items}
                               deleteFirebase={this.deleteFirebase.bind(this)}
                               toggleTrial={this.toggleTrial.bind(this)}
                               saveTrial={this.saveTrial.bind(this)}/>
                </Collection>
            </div>
        );
    }

}

export default App;