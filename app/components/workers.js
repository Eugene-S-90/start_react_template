
import React,{Component}  from  'react';


class Workers extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            receivedState:this.props.worker
        }
    }
    handleClick(e) {
        alert(e.target.innerHTML)
        this.setState({
            receivedState: {
                data:5,
                name:"BARAK"
            }
        })
      }
    render() {
        console.log(this.state.receivedState)
        // console.log(this.props.worker)
        return (
            <div>
                <h1>Title{this.state.receivedState.data}</h1>
                <h2 onClick={this.handleClick} >{this.state.receivedState.name}</h2>
            </div>
        );
    }
}
export default Workers;