import React from 'react';
import styles from './App.css';


export class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello, world',
        };
    }

    render() {
        return (
            <div className={styles.app}>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}
