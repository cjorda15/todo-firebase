import React from 'react';
import {Button, Icon, Input} from "react-materialize";

// note that an object key value cannot be passed as props
// id was passed from the todo-list file to the todo-list-item component

class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }


    onCancelClick() {
        this.setState({isEditing: false});
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.id;
        const newTask = this.refs.editInput.value;
        this.props.saveTrial(oldTask, newTask);
        this.setState({isEditing: false});
    }

    renderTaskSection() {

        const {isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            //cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={this.props.trial} ref="editInput"/>
                    </form>
                </td>
            );
        }

        return (

            <td style={taskStyle}>
                {this.props.trial}
            </td>

        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <Button onClick={this.onSaveClick.bind(this)}><Icon tiny>save</Icon></Button>
                    <Button onClick={this.onCancelClick.bind(this)}><Icon tiny>cancel</Icon></Button>
                </td>
            );
        }

        return (
            <td>
                <Button onClick={this.onEditClick.bind(this)}><Icon tiny>mode_edit</Icon></Button>
                <Button onClick={() => this.props.deleteFirebase(this.props.id)}><Icon tiny>delete</Icon></Button>
            </td>
        );
    }

    render() {
        // let checked = (!this.props.isCompleted) ? "checked" : '';
        return (
            <tr>
                <td>
                    <Input name='group1' type='checkbox' label=' '
                           checked={this.props.isCompleted}
                           onChange={() => {
                               this.props.toggleTrial(this.props.id);
                           }}/>
                </td>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({isEditing: true});
    }
}

export default TodosListItem;