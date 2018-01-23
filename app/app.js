
import React,{Component}  from  'react';
import Workers from './components/workers'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                data: "1",
                name:"jon"
            },
            {
                data: "2",
                name:"jim"
            },
            {
                data: "3",
                name:"josh"
            },
            ]
        }
    }
    render(){
        return(
            <div>Hello digga
                 {this.state.data.map((worker,index)=>{
                         return (
                            <Workers key={index} worker = {worker}/>
                         )
                     })}
    
            </div>
        )
    }
}
export default App;