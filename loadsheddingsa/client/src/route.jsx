import React,{Component} from 'react';
import './route.css'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'

import Home from './components/home'
import Issue from './components/issue'
import Select from './components/select'
import Data from './components/data'
import Zone from './components/zone'
import About from './components/about'
import C_issue from './components/c_issue'
import Showall from './components/showall'



import Home_icon from './components/assets/home.png'
import List_icon from './components/assets/list.png'
import Add_icon from './components/assets/add.png'
import Issues_icon from './components/assets/issues.png'
import About_icon from './components/assets/about.png'

import Pstate from './pstate'


import { connect } from 'react-redux'

class Routes extends Component {
    state = { 
       
        position:this.props.anyplay.position,
        pstate:this.props.anyplay.pstate,
        schedules: this.props.anyplay.schedules,
        imeko:this.props.anyplay.imeko,
        size: window.innerWidth,
        bar: true,
        notfy:false
     }

    bar = () => {
      


        if (this.state.bar===true) {
            this.setState({ notfy:true })
            setTimeout(() => {
                this.setState({ bar: false}) 
             },600)

        }
    if(this.state.bar===false){
        this.setState({bar:true})
        setTimeout(() => {
            this.setState({ notfy: false}) 
         },600)
    }
    }
     componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                position: nextProps.anyplay.position,
                pstate: nextProps.anyplay.pstate,
                schedules: nextProps.anyplay.schedules,
                imeko:nextProps.anyplay.imeko
            })
        }
    }

    hbord = () => {
        this.props.Pstate(false)
        
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
        this.size()
        
       
    }
    
    render() {

        const date = new Date();
        const year = date.getFullYear()
       
        return (
        <Router>
            <div className="copy-right">
                <div style={{flexDirection: this.state.size <=600?'column':'row'}}  className="route">
                    
                    
                    
                    <Switch>
                    <Route   path="/" exact component={Home} />
                    <Route path="/issues/" exact component={Issue} />
                    <Route   path="/data" exact component={Data} />
                    <Route   path="/zone" exact component={Zone} />
                    <Route   path="/about" exact component={About} />
                    <Route   path="/creat_issue" exact component={C_issue} />
                    <Route   path="/showall" exact component={Showall} />
                    <Route   path="/:id" exact component={Select} />
                   
                    
                           
                    </Switch>


                    {this.state.size >600?<div  className='nav-bar'>
                       <Link style={{ color: '#ffff', textDecoration: 'none' }} to="/">
                        <div className="home-icon-box">
                        <img src={Home_icon} alt='home' className='home-icon' />
                            <span>Home</span>
                        </div>
                        </Link>

                        <Link style={{ color: '#ffff', textDecoration: 'none' }} to="/data">
                        <div className="home-icon-box-1">
                        <img src={List_icon} alt='list' className='home-icon' />
                            <span>Data</span>
                            </div>
                        </Link>
                        <Link style={{ color: '#ffff', textDecoration: 'none' }} to="/zone">
                        <div className="home-icon-box-1">
                        <img src={Add_icon} alt='add' className='home-icon' />
                            <span>Zone</span>
                            </div>
                            </Link>
                        <Link style={{ color: '#ffff', textDecoration: 'none' }} to="/issues">
                        <div className="home-icon-box-1">
                        <img src={Issues_icon} alt='issues' className='home-icon' />
                            <span>Issues</span>
                            </div>
                        </Link>
                        <Link style={{ color: '#ffff', textDecoration: 'none' }} to="/about"> 
                        <div className="home-icon-box-1">
                        <img src={About_icon} alt='about' className='home-icon' />
                            <span>About</span>
                            </div>
                            </Link>
                    </div> : <div style={{filter:this.state.size <= 600 && this.state.pstate &&'blur(11px)'}} className="mobile-nav">
                            <div className="mobile-nav-bar">
                              <div onClick={this.bar} className="mobile-box-nav">
                                  <div style={{transform:this.state.notfy? 'rotate(45deg)':'rotate(0deg)',position:this.state.notfy&& 'absolute'}} className="white-bar"></div>
                                    {!this.state.notfy&&<div className="white-bar"></div>}
                                  <div style={{transform:this.state.notfy? 'rotate(-45deg)':'rotate(0deg)',position:this.state.notfy&& 'relative'}} className="white-bar"></div>
                                  </div>  
                            </div>
                            
                            {this.state.notfy && <div style={{marginTop:this.state.bar===false?'30px':'-90px'}} className="nofy-bar">
                                <div className="treediv">

                                <Link onClick={this.bar} style={{ color: '#ffff', textDecoration: 'none' }} to="/">
                        <div className="home-icon-box-2-x">
                        <img src={Home_icon} alt='home' className='home-icon' />
                            <span>Home</span>
                        </div>
                        </Link>

                        <Link onClick={this.bar} style={{ color: '#ffff', textDecoration: 'none' }} to="/data">
                        <div className="home-icon-box-2-x">
                        <img src={List_icon} alt='list' className='home-icon' />
                            <span>Data</span>
                            </div>
                        </Link>

                                </div>
                                <div className="treediv">
                                <Link onClick={this.bar} style={{ color: '#ffff', textDecoration: 'none' }} to="/zone">
                        <div className="home-icon-box-2-x">
                        <img src={Add_icon} alt='add' className='home-icon' />
                            <span>Zone</span>
                            </div>
                            </Link>
                        <Link onClick={this.bar} style={{ color: '#ffff', textDecoration: 'none' }} to="/issues">
                        <div className="home-icon-box-2-x">
                        <img src={Issues_icon} alt='issues' className='home-icon' />
                            <span>Issues</span>
                            </div>
                        </Link>
                                </div>
                                <div className="treediv">

                                <Link onClick={this.bar} style={{ color: '#ffff', textDecoration: 'none' }} to="/about"> 
                        <div className="home-icon-box-2-x">
                        <img src={About_icon} alt='about' className='home-icon' />
                            <span>About</span>
                            </div>
                            </Link>
                                </div>

                            </div>}


                    </div>}


                    
                    {this.state.size>600&&this.state.pstate&&this.state.schedules.map(e=>{return(<div key={e.province} style={{ marginTop: `${this.state.position.screeny - 80}px`, marginLeft: `${this.state.position.screenx}px` }} className="hover-board">
                        <span className="west">{e.province}</span>
                        <div className="hover-board-2">

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Zone:</span>
                                <span className="after-do">{e.zone}</span>
                            </div>

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Stage:</span>
                                <span className="after-do">{e.stage}</span>
                            </div>

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Dom:</span>
                                <span className="after-do">{e.dom}</span>
                            </div>

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Time:</span>
                                <span className="after-do">{e.time}</span>
                            </div>

                        </div>
                    </div>)})}

                    {this.state.size <=600 && this.state.pstate && <div style={{ width: `${window.innerWidth}px`, height: `${window.innerHeight}px` }} className="moble-stage">
                    {this.state.schedules.map(e=>{return(<div style={{height: '140px'}} key={e.province}  className="hover-board">
                        <div className="mob-x">
                            <div onClick={this.hbord}  className="x-hbord">
                                <div className="s-x1"></div>
                                <div className="s-x2"></div>
                            </div>
                        </div>
                        <span className="west">{e.province}</span>
                        <div className="hover-board-2">

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Zone:</span>
                                <span className="after-do">{e.zone}</span>
                            </div>

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Stage:</span>
                                <span className="after-do">{e.stage}</span>
                            </div>

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Dom:</span>
                                <span className="after-do">{e.dom}</span>
                            </div>

                            <div className="hover-board-x">
                                <div className="dot"></div>
                                <span className="after-dot">Time:</span>
                                <span className="after-do">{e.time}</span>
                            </div>

                        </div>
                    </div>)})}
                    </div>}


                </div>

                    {this.state.imeko && <div style={{ filter: this.state.size <= 600 && this.state.pstate && 'blur(11px)', marginLeft: this.state.size <= 600 && '0px', }} className="copy-right-info">
                        <span className="load-api">Load Shedding Api</span>
                        <span className="load-api-2">Load shedding REST API powered by Sintrex</span>
                        <div className="all-right">{`Copyright  ©${year} · Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · All right reserved`}</div>
                        <span className="all-right-2">Created by Siphosethu Nongwe</span>
                    </div>}

                </div>

        </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.cliReducer,
    }
};
 
export default connect(mapStateToProps, {Pstate})(Routes);
