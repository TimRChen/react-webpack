import React from 'react';
import Todolist from './Todolist/Todolist';

export default class Hello extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example-container">
                <div className="todolist">
                    <Todolist></Todolist>
                </div>
            </div>
        );
    }
}
