/**
 * Created by SLEEK on 5/17/2017.
 */
import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item'
import {Table} from "react-materialize";

class TodosList extends React.Component{
    renderItems() {
        return _.map(this.props.items, (message, key) => <TodosListItem key={key} id={key} {...message} {...this.props}/>);

    }

    render() {
        return (
            <Table>
                <TodosListHeader />
                    <tbody>
                        {this.renderItems()}
                    </tbody>
            </Table>
        );
    }
}

export default TodosList;