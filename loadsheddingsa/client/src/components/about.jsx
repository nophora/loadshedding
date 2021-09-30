import React,{Component} from 'react'
import './about.css'
import Note from './assets/note.png'

import Imeko from '../imeko'

import { connect } from 'react-redux'

class About extends Component {
    state = {
        size: window.innerWidth
    }
    
    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
             }
        window.addEventListener('resize', wide, false)
    }

    componentDidMount() {
        this.props.Imeko(true)
        this.size()
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }
    render() { 
        return (<div style={{ marginLeft:this.state.size<=600&&'0px',height:`${window.innerHeight}px`,marginTop:this.state.size<=600&&'40px'}} className="about">

            
            <div style={{width:this.state.size<=600&&'290px'}} className="about-div">
                <img src={Note} alt="note" className="note" />
                
                <span className="load-api">Load Shedding API</span>
                <div className="separate-note">
                    <span>Load shedding is a controlled process
                         that responds to unplanned events in
                          order to protect the electricity
                         power system from a total blackout</span>
                    <span>
                        We aimed at removing load from the power
                        system when there is an imbalance
                         between the electricity available
                          and the demand for electricity.
                    </span>
                </div>


        </div>




        </div>);
    }
}
 
const mapStateToProps = state => {
    return {
        anyplay: state.cliReducer,
    }
  };

export default connect(mapStateToProps,{Imeko})(About);
