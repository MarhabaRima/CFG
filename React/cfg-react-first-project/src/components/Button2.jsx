import './Button2.css';
import React from 'react';

class Button2 extends React.Component {
    constructor(props) {
        super (props);
        this.state = {counter: 0}
        this.whenClicked = this.whenClicked.bind(this);
    }
    whenClicked() {
        //every time the button is clicked, the counter increases by 1
        this.setState({
            counter: this.state.counter + 1});
    }

    render () {
        return (
        <>
            <button className="Button2"
                onClick = {this.whenClicked}
            >
            Pressed {this.state.counter} times
            </button>
        </>
        );
    }
}

export default Button2;

