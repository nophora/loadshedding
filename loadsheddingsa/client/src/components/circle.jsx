import React,{Component} from 'react'
import './circle.css'
class circle extends Component {
  state = {
    stroke: 0,
    percentage:(this.props.stage/8)*100
    }

  circle = () => {
    var val = this.state.percentage+12;
    this.setState({
      stroke: val
    })
            }
 
  componentDidMount() {
    setTimeout(() => {
    this.circle()
  },3000)
}


    render() { 
      return (
        <div onClick={this.circle} className='blure'>
        <div id="cont" >
            <svg id="svg" className='svg' style={{ width:"40px", height:"40px", viewPort:"0 0 100 100" }} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle style={{r:"18", cx:"20", cy:"20", fill:"transparent", strokeDasharray:"565.48", strokeDashoffset:'0px'}}></circle>
            <circle id="bar" className='bar' style={{r:"18",cx:"20",cy:"20", fill:"transparent", strokeDasharray:"565.48", strokeDashoffset:`${565.48-(this.state.stroke)}px`}}></circle>
          </svg>
          </div>
          <div className='percent'><span>{this.state.percentage}%</span></div>
          </div>
        );
    }
}
 
export default circle;
