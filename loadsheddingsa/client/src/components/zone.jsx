import React,{Component} from 'react'
import './zone.css'
import Location  from './assets/location.png'

import GeoData from '../geodata'
import Imeko from '../imeko'

import { connect } from 'react-redux'

class Zone extends Component{
    state = {
        size: window.innerWidth,
        write: "",
        p_p: 'search province',
        p_c: 'search Town',
        write_c: "",
        error1: 'province',
        error2:'city',
        province: [
            "easterncape",
            "freestate",
            "gauteng",
            "kwazulu-natal",
            "limpopo",
            "mpumalanga",
            "northerncape",
            "northwest",
            "westerncape",
            
        ],
        city:[],
        collection: {},
        cityon: false,
        cityon2:false,
        radom:4,
    }

    handleSeach = event => {
        const target = event.target; 
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    };

    input_select_p =(e) => {
         this.setState({ p_p: e, write: "" })
        
        if (this.state.province.includes(e)) {
           this.setState({cityon:'load'})
           const paramss=e==="easterncape"?'Eastern Cape':e==="freestate"?'Free State':
               e === "gauteng" ? "Gauteng" : e === "kwazulu-natal" ?'KwaZulu-Natal': e === "limpopo" ? "Limpopo" :
                   e === "mpumalanga" ? "Mpumalanga" : e === "northerncape" ? "Northern Cape" : e === "northwest" ? 'North West' :
                   e==="westerncape"&&"Western Cape" 
            
             fetch(`https://loadshedding-api.sintrex.com/getSchedules/?province=${paramss}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGpiQXI4SjQzZll5b3JxR1JWd2UzZ0Nma2wxIiwiaWF0IjoxNjI5NTU1MTAzfQ.yhk098mC7EFtPGzupMcxyJgBGGx98fms2Jb5W1siBfE'
         
                },
                 
            }).then((response) => response.json()).then(data => {
              
                this.town_mount()
                const selected = data.data
                const radom=Math.floor(Math.random() * (100 - 5) + 5)
                if (typeof selected[radom].province === 'string' && typeof selected[radom].time === 'string') {
            
                    
                    this.setState({
                        radom: radom,
                        correct:paramss,
                        collection: {
                            province:selected[radom].province,
                            zone: selected[radom].zone,
                            stage:selected[radom].stage,
                            dom: selected[radom].dom,
                            time:selected[radom].time,
                        }
                    })
                
                   
                }
            }).catch((f) => {console.log('error occares in Network::',f) })
        } else {
            this.setState({
                error1:'ivalid province'
            })

            setTimeout(() => {
                this.setState({
                    error1:'province'
                })
            },1000)
        }
    }

    input_select_c =(e) => {
        this.setState({ p_c: e, write_c: "", })
        
       if (this.state.province.includes("westerncape")) {
           this.setState({cityon2:'load'})
        fetch(`https://loadshedding-api.sintrex.com/getLocations/?town=${e}`, {
                        method: 'GET',
                        headers: {
                            'content-type': 'application/json',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGpiQXI4SjQzZll5b3JxR1JWd2UzZ0Nma2wxIiwiaWF0IjoxNjI5NTU1MTAzfQ.yhk098mC7EFtPGzupMcxyJgBGGx98fms2Jb5W1siBfE'
                        },
                      
        }).then((response) => response.json()).then(data => {
            const city = {
                municipality: data.data[0].municipality,
                town: data.data[0].town,
            }
           if(typeof  this.state.collection.province==='string'&&typeof  this.state.collection.time==='string'){
            localStorage.setItem('mount', JSON.stringify({ province: this.state.correct, town: this.state.p_c,radom:this.state.radom }))
                this.props.GeoData([{...this.state.collection,...city }])
               setTimeout(() => {
                    this.props.history.push('./')
                },3000)
            }
            }).catch(console.log('error occares in Network::'))
        } else {
            this.setState({
                error2:'ivalid city'
            })

            setTimeout(() => {
                this.setState({
                    error2:'city'
                })
            },1000)
        }
  }




    town_mount =async() => {

       await fetch(`https://loadsheddingsa.herokuapp.com/loadsheddingapi/countrys/${this.state.p_p}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',     
        },
      
       }).then((response) => response.json()).then(data => {
    this.setState({city:data.towns,cityon:true})
}).catch(e=>{console.log('error occares in Network::',e)})
    
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
        this.props.Imeko(true)
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    })

     
}
  

    render() {
        const pro_key=this.state.province.filter(e => { return e.toLowerCase().indexOf(this.state.write.toLowerCase()) !== -1; });
        const pro_key_2=this.state.city.filter(e => { return e.town.toLowerCase().indexOf(this.state.write_c.toLowerCase()) !== -1; });
       return (
            <div style={{height:`${window.innerHeight}px`, marginLeft:this.state.size<=600&&'0px',marginTop:this.state.size<=600&&'40px'}} className="zone-pg">

                <div className="pg-zone">
                    <span onClick={this.input_select_c} className="set-location">Set Location</span>
            
                    <div className="province-w">
                        <div onClick={this.test} className="label-w"><span>{this.state.error1}</span></div>
                        <input  value={this.state.write} name='write' onChange={this.handleSeach} placeholder={`${this.state.p_p}`}  className="label-inp"/>
                       {this.state.cityon==='load'&&<div className="load-t"><div className="load-c"></div></div>}
                   </div>


                   
                    {this.state.write.length>=1&&<div className="prv-scroll">
                        
                        {this.state.write.length>=1&& typeof pro_key[0]==='string'?pro_key.map(e => {
                            return (<div onClick={() => { this.input_select_p(e) }} key={e} className="clb-location_1">
                                <img src={Location} alt='issues' className='clb-image' />
                                <span className="clb-span">{e}</span>
                            </div>)}):this.state.write.length>=1&&<div className="clb-location_1">
                                <img src={Location} alt='issues' className='clb-image' />
                                <span className="clb-span">Location not found</span>
                            </div>}

                    </div>}
                

                    {this.state.cityon===true&&<div className="province-w">
                        <div className="label-w"><span>{this.state.error2}</span></div>
                        <input value={this.state.write_c} name='write_c' onChange={this.handleSeach} placeholder={`${this.state.p_c}`} className="label-inp" />
                        {this.state.cityon2==='load'&&<div className="load-t"><div className="load-c"></div></div>}
                  </div>}
                    {this.state.write_c.length>=1&&<div className="prv-scroll-2">
                    <div className="scrold-w">
                        <div className="scrold">
                                
                        
                        {(this.state.write_c.length >= 1 && typeof pro_key_2[0] === 'object')&& pro_key_2.map((e,i)=> {
                            return (<div onClick={() => { this.input_select_c(e.town) }} key={`${i}`} className="clb-location-2">
                                <img src={Location} alt='issues' className='clb-image' />
                                <span className="clb-span">{e.town}</span>
                            </div>)
                        })}
                                
                            {(this.state.write_c.length>=1&&typeof pro_key_2[0] !== 'object')&&<div className="clb-location_1">
                                <img src={Location} alt='issues' className='clb-image' />
                                <span className="clb-span">Location not found</span>
                            </div>}
                            </div>
                        </div>
                       
                       
                    </div>}
                </div>

            

            </div>);
    }
    
}

const mapStateToProps = state => {
    return {
        anyplay: state.cliReducer,
    }
};
 
export default connect(mapStateToProps,{ GeoData,Imeko })(Zone);
