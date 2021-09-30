import React, {Component} from "react"
import './data.css'
import Issues from './assets/noul.png'
import './home.css'
import Loct from './assets/location.png'


import Imeko from '../imeko'

import { connect } from 'react-redux'


class Showall extends Component {
    state = {
        data:this.props.anyplay.showall,
        size: window.innerWidth,
        relise: '',
        slice:100,
       
     }

     size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
             }
        window.addEventListener('resize', wide, false)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
               data: nextProps.anyplay.showall,
                
            })
        }
    }



     componentDidMount() {
        this.size()
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
         this.props.Imeko(false)
    this.figerscroll()

    
    
         
         
    }


  


    figerscroll = () => {


       
        const srroll = document.querySelectorAll('.data3')
               
      

        const chandleScroll = () => {

           
              const srrolly = document.querySelectorAll('.data3')
       
       
              const add = srrolly[0].scrollHeight - srrolly[0].clientHeight
  
          
                if (add === srrolly[0].scrollTop && this.state.data.data.length > this.state.slice && (typeof this.state.relise === 'string' || this.state.relise === true)) {
    
                  this.setState({ relise: false })
    
                    setTimeout(() => {
                        this.setState({
                            slice: this.state.slice + 100,
                            relise: true,
                        })
                    }, 3000)
                }
            
            }
       

            srroll[0].addEventListener('scroll', chandleScroll, false);
            return () => { window.removeEventListener('scroll', chandleScroll, false); }

        
    }

        
    
    render() {
        const v=this.state.data.avoids
        return (<div style={{ marginLeft:this.state.size<600&&'0px',marginTop:this.state.size<=600&&'40px',height:`${window.innerHeight-20}px`}} className="data">
            
            <div style={{height:`${window.innerHeight-25}px`}} className="data2">
          <div className="data3">
                {this.state.data.data.slice(0, this.state.slice).map((e, i) => {
                    return (
                                 
                                 <div  style={{marginLeft:this.state.size<600&&'0px',marginTop:'20px'}} key={i} className="data-bite-box">
                                         <div className='zone'>
                                             <div className="round-circle">
                                                 <div className="in-round-circle">
                                                     <div className="in-circle-1"></div>
                                                     <div className="in-circle-2"></div>
                                                 </div>
                                                 <div className="out-round-circle"><img src={Loct} alt='Loction' className='l-location' /></div>
                                             </div>
                                             <div className="zone-name"><span>Location</span></div>
                                         </div>
                                         <div className='zone-data'>
                                      
                                      
                                         <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Province: ${e.province}`}</span></div>
                                             <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Zone: ${e.zone}`}</span></div>
                                             
                                             {(v==='Town'||v==='Municipality')&&<div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Town: ${e.town}`}</span></div>}
                                             {(v==='Town'||v==='Municipality')&&<div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Municipality: ${e.municipality}`}</span></div>}
                                         
                                             {(v!=='Town'&&v!=='Municipality')&&<div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Stage: ${e.stage}`}</span></div>}
                                             {(v!=='Town'&&v!=='Municipality')&&<div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Dom: ${e.dom}`}</span></div>}
                                             {(v!=='Town'&&v!=='Municipality')&&<div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Time: ${e.time}`}</span></div>}
                                         
                                      
                            </div>
                                         <div className='selected-data'>
                                         <img src={Issues} alt='issues' className='issues' />
                                         </div>
                                 </div>
                                 
            )
            })}
                </div>
                
           
                
            </div>
            {this.state.relise===false&&<div className="infity-load">
                <div className="infity-load2"></div>
                </div>}
        </div> );
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.cliReducer,
    }
};

 
export default connect(mapStateToProps,{Imeko})(Showall);
