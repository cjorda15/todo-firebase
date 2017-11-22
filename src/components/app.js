/**
 * Created by SLEEK on 4/17/2017.
 */
import React from 'react';
import CreateTodo from './create-todo';
import firebase from 'firebase';
import TodosList from "./todos-list";

// Create a firebase db to store data, replace the db info in this tutorial with your firbase db info

const config = {
    apiKey: "AIzaSyDcxxxxxxxxtgT8JtQSWR-ExxxxxxvBS0",
    authDomain: "todo-list-xxxxx.firebaseapp.com",
    databaseURL: "https://todo-list-xxxxx.firebaseio.com",
    projectId: "todo-list-xxxxx",
    storageBucket: "todo-list-xxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx"
};
firebase.initializeApp(config);

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentWillMount(){
        //Created a child node pop with a sub child node arr5
        firebase.database().ref('/pop/arr5').on('value', (snapshot)=> {
            const items = snapshot.val();
            this.setState({
                items: items
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
        // passing a key value to identify node to be deleted
        firebase.database().ref('/pop/arr5/' + key ).remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            });
        this.setState({
            clicked: true
        });
    }


    render() {
        return (
            <div>

                <h1>React ToDos App</h1>
                <CreateTodo items={this.state.items} />
                <TodosList items={this.state.items}
                            deleteFirebase={this.deleteFirebase.bind(this)}
                            toggleTrial={this.toggleTrial.bind(this)}
                            saveTrial={this.saveTrial.bind(this)}/>
            </div>
        );
    }

}

export default App;