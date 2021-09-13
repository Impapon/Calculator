import { Component } from "react";
import Button from "./Button";
import './Display.css'

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(sent) {
        if(sent == 'ac'){
            this.setState({
                result : 0
            })
        }

        else{
            this.setState(prevState=>({
                result : prevState.result + sent
            }))
        }
    }

    render() {

        return (
            <>
                <div className='container'>
                    {this.state.result}
                </div>
                <Button clicked={this.handleClick} />
            </>
        );
    }
}

export default Display;