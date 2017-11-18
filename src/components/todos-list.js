/**
 * Created by SLEEK on 5/17/2017.
 */
import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item'

class TodosList extends React.Component{
    renderItems() {
        const props = _.omit(this.props, 'items');

        return _.map(this.props.items, (message, key) => <TodosListItem key={key}
                                                                        style={message.isCompleted ? taskStyle.green  : taskStyle.red}
                                                                        onClick={()=>this.toggleTrial(key)} />);

    }

    // renderTodos(){
    //     const props = _.omit(this.props, 'messages');
    //     return _.map(this.props.messages, (item, key) => <TodosListItem key={key} {...item} {...props} />);
    // }

    render() {
        // console.log(this.renderTodos(), 'props TODOS')
        // console.log(this.renderItems(), 'RENDER ITEMS1')
        return (
            <table>
                <TodosListHeader />
                <tbody>
                {this.renderItems()}
                {/*{this.renderTodos()}*/}
                </tbody>
            </table>
        );
    }
}

export default TodosList;