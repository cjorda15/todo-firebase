/**
 * Created by SLEEK on 4/17/2017.
 */
import React from 'react';
import CreateTodo from './create-todo';
import firebase, {isString} from 'firebase';
import _ from 'lodash';


const config = {
    apiKey: "AIzaSyDcx977w70ztgT8JtQSWR-EobmJJc7vBS0",
    authDomain: "todo-list-3bd0b.firebaseapp.com",
    databaseURL: "https://todo-list-3bd0b.firebaseio.com",
    projectId: "todo-list-3bd0b",
    storageBucket: "todo-list-3bd0b.appspot.com",
    messagingSenderId: "128895753788"
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

        // firebase.database().ref('/pop/arr1/' + key).child('isCompleted').set(foundItem.isCompleted);
        firebase.database().ref().child('pop').child('arr5').child(key).update({isCompleted: foundItem.isCompleted});
        this.setState({
            items: this.state.items
        });
    }

    deleteFirebase(key){
        console.log(key, 'KEY');
        firebase.database().ref('/pop/arr5/' + key ).remove()
            .then(function() {
                console.log("Remove succeeded.")
            })
            .catch(function(error) {
                console.log("Remove failed: " + error.message)
            });
        this.setState({
            items: this.state.items
        });
    }

    renderTrial(){
        const taskStyle = {

            green: {
                color: 'green',
                cursor: 'pointer',
            },
            red: {
                color: 'red',
                cursor: 'pointer',
            }
        };

        return _.map(this.state.items, (message, key) => <div key={key}
                                                              style={message.isCompleted ? taskStyle.green  : taskStyle.red}
                                                              onClick={()=>this.toggleTrial(key)}>
                                                                { message.trial }
            <button onClick={()=> this.deleteFirebase(key)}>Delete</button> </div>);
    }


    render() {
        return (
            <div>

                <h1>React ToDos App</h1>
                <CreateTodo />
                <div>
                    {this.renderTrial()}
                </div>
            </div>
        );
    }

}

export default App;