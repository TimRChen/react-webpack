import React from 'react';
import styles from './App.css';

//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
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


// class constructor eg.
// export class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;

//         return Math.sqrt(dx*dx + dy*dy);
//     }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// console.log(Point.distance(p1, p2));
