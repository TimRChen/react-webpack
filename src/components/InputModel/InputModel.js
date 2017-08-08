import React from 'react';
import './InputModel.css';

export default class InputModel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.getInputValue = this.getInputValue.bind(this);
    }

    getInputValue(event) {
        let value = event.target.value;
        this.setState({
            inputValue: value
        });
    }

    render() {
        return (
            <div className="input-model">
                <div className="show-input-value">{this.state.inputValue}</div>
                <div className="input-box">
                    <input
                        type="text"
                        className="input"
                        placeholder="Plase input something to try"
                        value={this.state.inputValue}
                        onInput={this.getInputValue} />
                </div>
            </div>
        );
    }
}