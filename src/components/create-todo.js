/**
 * Created by SLEEK on 5/17/2017.
 */
import React from "react";
import firebase from 'firebase';
import {Button, Icon} from "react-materialize";
import '../css/style.css';

class CreateTodo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }


    handleCreate(ev){
        ev.preventDefault();
        let firebaseRef = firebase.database().ref('pop/arr5');
        const messageText = {
            trial: this.refs.createInput.value,
            isCompleted: false
        };
        const validateInput = this.validateInput(messageText.trial);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        firebaseRef.push().set(messageText);
        this.setState({ error: null });

        this.refs.createInput.value = '';
        this.refs.createInput.focus();
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <form >
                                <input ref="createInput" type="text" placeholder="What do I need to do?" />

                            </form>
                        </td>
                        <td>
                            <Button onClick={this.handleCreate.bind(this)}><Icon large>save</Icon></Button>
                        </td>
                        <td>
                            {this.renderError()}
                        </td>

                    </tr>
                </tbody>
            </table>

        );
    }

    validateInput(trial) {
        if (!trial) {
            return 'Please enter a task.';
        } else if (_.find(this.props.items, todo => todo.trial === trial)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}

export default CreateTodo;
