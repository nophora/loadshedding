import React, {Component} from "react"
import './data.css'
import Issues from './assets/noul.png'
import './home.css'
import Loct from './assets/location.png'


import Imeko from '../imeko'

import { connect } from 'react-redux'


class Data extends Component {
    state = {
        
        data: [],

        zone: [1, 2, 3, 4, 5],
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

     componentDidMount() {
        this.size()
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
         this.props.Imeko(false)
    this.figerscroll()

    
    
         fetch(`https://loadshedding-api.sintrex.com/getSchedules`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGpiQXI4SjQzZll5b3JxR1JWd2UzZ0Nma2wxIiwiaWF0IjoxNjI5NTU1MTAzfQ.yhk098mC7EFtPGzupMcxyJgBGGx98fms2Jb5W1siBfE'
                 
            },
             
        }).then((response) => response.json()).then(data => {
          
           const prov1=data.data.filter(e=>e.province==='Eastern Cape').slice(0,50)
           const prov2=data.data.filter(e=>e.province === 'Free State').slice(100,140)
           const prov3=data.data.filter(e=>e.province==="Gauteng").slice(0,80)
           const prov4=data.data.filter(e=>e.province==='KwaZulu-Natal').slice(40,90)
           const prov5=data.data.filter(e=>e.province==="Limpopo").slice(70,130)
           const prov6=data.data.filter(e=>e.province==="Mpumalanga").slice(100,150)
           const prov7=data.data.filter(e=>e.province==="Northern Cape").slice(0,100)
           const prov8=data.data.filter(e=>e.province==='North West').slice(40,140)
           const prov9=data.data.filter(e=>e.province==="Western Cape").slice(0,150)
       
                  
          
            this.setState({ data:[...prov1,...prov2,...prov3,...prov4,...prov5,...prov6,...prov7,...prov8,...prov9] })
          
        }).catch()

         
         
    }


  


    figerscroll = () => {


       
        const srroll = document.querySelectorAll('.data3')
               
      

        const chandleScroll = () => {

           
              const srrolly = document.querySelectorAll('.data3')
       
       
              const add = srrolly[0].scrollHeight - srrolly[0].clientHeight
  
          
                if (add === srrolly[0].scrollTop && this.state.data.length > this.state.slice && (typeof this.state.relise === 'string' || this.state.relise === true)) {
    
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
        return (<div style={{ marginLeft:this.state.size<600&&'0px',marginTop:this.state.size<=600&&'40px',height:`${window.innerHeight-20}px`}} className="data">
            
            <div style={{height:`${window.innerHeight-25}px`}} className="data2">
          <div className="data3">
                {this.state.data.slice(0, this.state.slice).map((e, i) => {
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
                                             <div className="zone-name"><span>Loction</span></div>
                                         </div>
                                         <div className='zone-data'>

                                         <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Province: ${e.province}`}</span></div>
                                             <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Zone: ${e.zone}`}</span></div>
                                             
                                         
                                             <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Stage: ${e.stage}`}</span></div>
                                             <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Dom: ${e.dom}`}</span></div>
                                             <div className="province-data"><span style={{fontSize:'12px'}} className="move-left">{`Time: ${e.time}`}</span></div>
                                         
                                        
                                        
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

 
export default connect(mapStateToProps,{Imeko})(Data);
