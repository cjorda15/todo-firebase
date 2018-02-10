/**
 * Created by SLEEK on 5/17/2017.
 */
import React from 'react';

class TodoListHeader extends React.Component{
    render(){
        return (

            <thead>
                <tr>
                    <th>#</th>
                    <th>Items</th>
                    <th>Status</th>
                </tr>
            </thead>


        );
    }
}

export default TodoListHeader;