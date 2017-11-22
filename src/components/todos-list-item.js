import React from 'react';

// note that an object key value cannot be passed as props
// id was passed from the todo-list file to the todo-list-item component

class TodosListItem extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }


    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.id;
        const newTask = this.refs.editInput.value;
        this.props.saveTrial(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    renderTaskSection() {
        const { isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={this.props.trial} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={()=>this.props.toggleTrial(this.props.id)}
            >
                {this.props.trial}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={()=> this.props.deleteFirebase(this.props.id)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }
}

export default TodosListItem;