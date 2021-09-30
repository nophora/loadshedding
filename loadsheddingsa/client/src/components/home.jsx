import React, { Component } from 'react'
import './home.css'
import Logo from './assets/logo.png'
import Light from './assets/light.png'
import Search from './assets/search.png'
import Filter from './assets/filter.png'
import Issues from './assets/noul.png'
import Location  from './assets/location.png'
import Time  from './assets/time.png'
import Back_space from './assets/back.png'
import Map from './assets/map.png'
import Loct from './assets/location.png'




import { connect } from 'react-redux'

import Position from '.././position'
import Pstate from '.././pstate'
import Province from '.././province'

import Issue from '../issue'
import GeoData from '../geodata'
import Imeko from '../imeko'
import Showall from '../show'


import Circle from './circle'


class Home extends Component {
    state = {
        m_slide:0,
        coming: false,
        filters: false,
        search: '',
       data: [ {
            province: "easterncape",
            zone: "9",
            stage: "3",
            dom: "1",
            time: "0:00-2:00"
        },
        {
            province: "freestate",
            zone: "1",
            stage: "1",
            dom: "1",
            time: "0:00-2:00"
        },
        {
            province: "gauteng",
            zone: "7",
            stage: "4",
            dom: "25",
            time: "8:00-10:00"
        },
        {
            province: "kwazulu-natal",
            zone: "12",
            stage: "7",
            dom: "4",
            time: "0:00-2:00"
        },
        {
            province: "limpopo",
            zone: "9",
            stage: "5",
            dom: "27",
            time: "22:00-0:00"
        },
        {
            province: "mpumalanga",
            zone: "1",
            stage: "1",
            dom: "1",
            time: "0:00-2:00"
        },
        {
            province: "northerncape",
            zone: "12",
            stage: "7",
            dom: "30",
            time: "2:00-4:00"
        },
        {
            province: "northwest",
            zone: "8",
            stage: "6",
            dom: "9",
            time: "4:00-6:00"
        },
        {
            province: "westerncape",
            zone: "9",
            stage: "3",
            dom: "1",
            time: "0:00-2:00"
        },
        {
            province: "northerncape",
            zone: "3",
            stage: "5",
            dom: "30",
            time: "2:00-4:00"
        },
    
        {
            province: "limpopo",
            zone: "9",
            stage: "4",
            dom: "27",
            time: "20:00-0:00"
        },
    
        {
            province: "freestate",
            zone: "2",
            stage: "1",
            dom: "1",
            time: "0:00-2:00"
        },
    
        {
            province: "kwazulu-natal",
            zone: "12",
            stage: "7",
            dom: "8",
            time: "0:00-2:00"
           },
           {
            province: "limpopo",
            zone: "13",
            stage: "7",
            dom: "2",
            time: "10:00-0:00"
        },
    
        ],
       
        left: 0,
        format:['0','1','2','3','4','5','6','7','8','9'],
        size: window.innerWidth,
        to_get: 'Town',
        avoids: 'Time',
        schedules: ['Town','Zone', 'Time', 'Stage', 'Province','Dom','Municipality'],
        numbers: 0,
        issues: this.props.anyplay.issues,
        loadsch: false,
        v_input: false,

        collect:{},
       
        collection:this.props.anyplay.collection,
        pstate: this.props.anyplay.pstate,
        province_schedules:[
            {
                province: "easterncape",
                zone: "9",
                stage: "3",
                dom: "1",
                time: "0:00-2:00"
            },
            {
                province: "freestate",
                zone: "1",
                stage: "1",
                dom: "1",
                time: "0:00-2:00"
            },
            {
                province: "gauteng",
                zone: "7",
                stage: "4",
                dom: "25",
                time: "8:00-10:00"
            },
            {
                province: "kwazulu-natal",
                zone: "12",
                stage: "7",
                dom: "4",
                time: "0:00-2:00"
            },
            {
                province: "limpopo",
                zone: "9",
                stage: "5",
                dom: "27",
                time: "22:00-0:00"
            },
            {
                province: "mpumalanga",
                zone: "1",
                stage: "1",
                dom: "1",
                time: "0:00-2:00"
            },
            {
                province: "northerncape",
                zone: "12",
                stage: "7",
                dom: "30",
                time: "2:00-4:00"
            },
            {
                province: "northwest",
                zone: "8",
                stage: "6",
                dom: "9",
                time: "4:00-6:00"
            },
            {
                province: "westerncape",
                zone: "9",
                stage: "3",
                dom: "1",
                time: "0:00-2:00"
            },
            {
                province: "mpumalanga",
                zone: "8",
                stage: "8",
                dom: "1",
                time: "0:00-2:00"
            },
            {
                province: "northwest",
                zone: "8",
                stage: "6",
                dom: "9",
                time: "4:00-6:00"
            }
        ]
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
               pstate: nextProps.anyplay.pstate,
                collection: nextProps.anyplay.collection,
                issues:nextProps.anyplay.issues
            })
        }
    }

    coming = () => {
        this.setState({
            coming: !this.state.coming
        })
    }

    handleSeach = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    };

    search = () => {
        this.submit()
        this.setState({
            filters: false,     
        })
    }
    
    filter = () => {
        
        this.setState({
            filters: !this.state.filters,
            numbers: 0,
            to_get:'Town'
        })
    }
    
    left = () => {
        if(this.state.size>600){
            this.setState({
            left: this.state.left >= 240 ? 0 : this.state.left + 120
            })
            console.log('scroll-left',this.state.left)
    }else{
        this.setState({m_slide:this.state.m_slide===0?
            this.state.data.length-1:
            this.state.m_slide-1})
    }
    }

    right = () => {
        if(this.state.size>600){
        this.setState({
            left: this.state.left <= -3000 ? 0 : this.state.left- 120
        })
        console.log('scroll-right',this.state.left)
    }else{
        this.setState({m_slide:this.state.m_slide===this.state.data.length-1?0:
            this.state.m_slide+1})
    }
    }
    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
             }

        window.addEventListener('resize', wide, false)


    }

    left_schedules = () => {
        this.setState({numbers:this.state.numbers>=6?0:this.state.numbers+1})
    }
    right_schedules = () => {
        this.setState({numbers:this.state.numbers<=0?0:this.state.numbers-1})
    }

    value_of_tobe = () => {
        this.setState({
            to_get: this.state.schedules[this.state.numbers],
            filters: false,})
           }


    typing = (e) => {
        if (this.state.to_get === 'Time'&&(e==='b'||this.state.search.length<=10)) {
            
            const add = this.state.search.split('')
            const desion=add.length===2?[':',e]:add.length===5?['-',e]:add.length===8?[':',e]:[e]
            const pushing = [...add, ...desion].join().replace(/(,)+/g, '')
            const sub=add.splice(0,add.length-1).join().replace(/(,)+/g,'')
            this.setState({ search:e==='b'?sub:pushing })
           
        } else if((this.state.to_get==='Stage'||this.state.to_get==='Zone'||this.state.to_get==='Dom')&&(e==='b'||this.state.search.length<=1)){
            const add = this.state.search.split('')
            const pushing = [...add, ...[e]].join().replace(/(,)+/g, '')
            const sub=add.splice(0,add.length-1).join().replace(/(,)+/g,'')
            this.setState({ search:e==='b'?sub:pushing })
           
        }
        }


    submit = () => {

        if (this.state.search.length >= 1) {
            const town = `getlocations/?town=${this.state.search}`
            const province = `getSchedules/?province=${this.state.search}`
            const zone = `getSchedules/?zone=${this.state.search}`
            const time = `getSchedules/?time=${this.state.search}`
            const stage = `getSchedules/?stage=${this.state.search}`
            const dom = `getSchedules/?dom=${this.state.search}`
            const municipality = `getLocations/?municipality=${this.state.search}`

            const rt = this.state.to_get
            const check = rt === 'Town' ? town : rt === 'Zone' ? zone : rt === 'Time' ? time : rt === 'Stage' ? stage : rt === 'Province' ? province : rt === 'Dom' ? dom : rt === 'Municipality' && municipality
            this.setState({loadsch:true})

            fetch(`https://loadshedding-api.sintrex.com/${check}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGpiQXI4SjQzZll5b3JxR1JWd2UzZ0Nma2wxIiwiaWF0IjoxNjI5NTU1MTAzfQ.yhk098mC7EFtPGzupMcxyJgBGGx98fms2Jb5W1siBfE'
         
                },
           
          
            }).then((response) => response.json()).then(data => {
  
                if (typeof data.data[0] === 'object') {
                    
                    this.setState({
                            avoids: this.state.to_get,
                            data: data.data.slice(0, 14),
                            loadsch: false,
                        search: '',
                          
                    })

                    setTimeout(()=> {
                        this.setState({ numbers: 0,
                            to_get:'Town'})
                    },1000)
                        
                    
                    this.props.Showall({ data:data.data.slice(0, 1000), avoids: this.state.to_get,})
                    
                  
                } else {
                    this.setState({
                        v_input: true,
                        loadsch: false,
                        search: '',
                    })
    
                    setTimeout(() => {
                    
                        this.setState({v_input: false
                        })
                    },3000)
                }
                   
            }).catch(e => {
                this.setState({
                    v_input: true,
                    loadsch: false,
                    search: '',
                })
                console.log('error',e)
                setTimeout(() => {
                
                    this.setState({v_input: false
                    })
                },3000)
                
            })
            

        } else {

            this.setState({
                v_input: true,
                search: '',
           })
            
            setTimeout(() => {
                
           this.setState({v_input: false
           })
            
            },3000)
            
}

    }





   clicking = (e,f,i) => {
            const province=this.state.province_schedules.filter(p=>(p.province===i))
            const screen={
                screenx:e.screenX,
                screeny: e.screenY,
       }
           
       this.props.Position(screen)
       this.props.Pstate(f)
       this.props.Province(province)
       
      
       
    }

    

    geographical_area=async()=>{

        const data = JSON.parse(localStorage.getItem('mount'));
 
        const anyway=  data !== null
           
           await fetch(`https://loadshedding-api.sintrex.com/getSchedules/?province=${anyway?data.province:"Western Cape"}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGpiQXI4SjQzZll5b3JxR1JWd2UzZ0Nma2wxIiwiaWF0IjoxNjI5NTU1MTAzfQ.yhk098mC7EFtPGzupMcxyJgBGGx98fms2Jb5W1siBfE'
         
            },
             
        }).then((response) => response.json()).then(datas => {
            const selected = datas.data
            const radom=Math.floor(Math.random() * (100 - 5) + 5)
               
            if (typeof selected[!anyway?radom:data.radom].province === 'string' && typeof selected[radom].time === 'string') {
            
                this.setState({
                    collect: {
                        province: selected[!anyway?radom:data.radom].province,
                        zone: selected[!anyway?radom:data.radom].zone,
                        stage: selected[!anyway?radom:data.radom].stage,
                        dom: selected[!anyway?radom:data.radom].dom,
                        time: selected[!anyway?radom:data.radom].time,
                    }
                })
            }
           
                
        }).catch()


        await fetch(`https://loadshedding-api.sintrex.com/getlocations/?town=${anyway?data.town:"Mfuleni (1)"}`, {
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
    if (typeof this.state.collect.province === 'string' && typeof this.state.collect.time === 'string') {
           
        this.props.GeoData([{ ...this.state.collect, ...city }])
    }
}).catch()



await fetch(`https://loadshedding-api.sintrex.com/getSchedules`, {
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhOGpiQXI4SjQzZll5b3JxR1JWd2UzZ0Nma2wxIiwiaWF0IjoxNjI5NTU1MTAzfQ.yhk098mC7EFtPGzupMcxyJgBGGx98fms2Jb5W1siBfE'
         
    },
     
}).then((response) => response.json()).then(data => {
  
                  
    const prov1=data.data.filter(e=>e.province==='Eastern Cape')[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov2=data.data.filter(e=>e.province === 'Free State')[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov3=data.data.filter(e=>e.province==="Gauteng")[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov4=data.data.filter(e=>e.province==='KwaZulu-Natal')[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov5=data.data.filter(e=>e.province==="Limpopo")[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov6=data.data.filter(e=>e.province==="Mpumalanga")[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov7=data.data.filter(e=>e.province==="Northern Cape")[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov8=data.data.filter(e=>e.province==='North West')[Math.floor(Math.random() * (100 - 10) + 10)]
    const prov9=data.data.filter(e=>e.province==="Western Cape")[Math.floor(Math.random() * (100 - 10) + 10)]


    this.setState({ province_schedules:[prov1,prov2,prov3,prov4,prov5,prov6,prov7,prov8,prov9] })
        
}).catch()


    }


    componentDidMount() {
        this.geographical_area()
        this.size()
        this.props.Issue()
        this.props.Imeko(true)
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }
 render() {
       const sz=this.state.size
     const v = this.state.avoids
    return (
         <div style={{filter:this.state.size <= 600 && this.state.pstate &&'blur(11px)', marginLeft:this.state.size<=600&&'0px',marginTop:this.state.size<=600&&'40px'}}  className='home'>
             <div style={{width:this.state.size<=1250&&sz>600?'65%':sz<=600&&'100%'}} className='main-page'>
                 <div className='power-by'>
                     <div className='logo-text'>
                         <span>Power by</span>
                         <img src={Logo} alt='logo' className='logo' />
                                
                     </div>
                 </div>
                 <div className='user-zone'>
                    
                     {this.state.collection.map((e,i) => {
                         return (<div key={i} style={{ width: sz <= 600 && '290px', }} className='location'>
                             <span className='city-name'>{e.town}</span>
                             <div className='stages'>
                                 <div className='stages-1'>
                                     <div className='cercle'>
                                         <div className='cercle-1'>
                                             <div className='cercle-2'>
                                                 <span className='stage-name'>{e.stage}</span>
                                             </div>
                                         </div>
                                     </div>
                                     <span className='stage-name'>Stage</span>
                                 </div>
                                 <div className='stages-1'>
                                     <div className='cercle'>
                                         <Circle stage={e.stage} />
                                     </div>
                                     <span className='stage-name'>Average</span>
                                 </div>
                            
                             </div>
                             <div className="load-ifo">
                                 <div className="load-ifo-1">

                                     <div className="loction-span">
                                         <span className="name-of-city">{'Province'}:</span>
                                         <span className="name-of-city-2">{e.province}</span>
                                     </div>
                                     <div className="loction-span">
                                         <span className="name-of-city">{'Municpality'}:</span>
                                         <span className="name-of-city-2">{e.municipality}</span>
                                     </div>
                                     <div className="loction-span">
                                         <span className="name-of-city">{'Zone'}:</span>
                                         <span className="name-of-city-2">{e.zone}</span>
                                     </div>
                                     <div className="loction-span">
                                         <span className="name-of-city">{'Time'}:</span>
                                         <span className="name-of-city-2">{e.time}</span>
                                     </div>

                                 </div>
                                 <div className="load-ifo-2">
                                     <div className="image-box">
                                         <img src={Light} alt='light' className='light' />
                                     </div>
                                     <div onClick={() => this.props.history.push('./zone')} className="info-upcoming-box">
                                         <span className='stage-name-view'>{'Change location'}</span>
                                     </div>
                                 </div>
                             </div>
                         </div>)
                     })}
                         

                     <div className='data-scroll'>
                         <div className='search-scroll'>
                             <div className='search-nav-bar'>
                                
                                 {this.state.v_input===true?<div className="error-red"><span>invalid input please try again</span></div>:
                                 (this.state.to_get==='Stage'||this.state.to_get==='Zone'||this.state.to_get==='Time'||this.state.to_get==='Dom')?
                                 <div className='time-split'>
                                 <span className='time-span'>{`Seach ${this.state.to_get}${this.state.to_get==='Time'?' e.g 14:00-15:30':''}`}</span>
                                 <div className='time-light'>
                                 <span>{this.state.search}</span>
                                 </div>
                                 </div>
                                 
                                 
                                 :<input value={this.state.search} name='search' onChange={this.handleSeach} placeholder={`Seach ${this.state.to_get}${this.state.to_get==='Time'?' e.g 14:00-15:30':''}`} className='search-input' />}
                                 {this.state.filters &&
                                     <div style={{width:sz<600&&'200px'}} className="select-filter">
                                     <div onClick={this.right_schedules} className="left-filter"><span>{'<'}</span></div>
                                     <div style={{width:sz<600&&'150px'}} onClick={this.value_of_tobe} className="filter-slide"><span>{`Filter ${this.state.schedules[this.state.numbers]}`}</span></div>
                                     <div onClick={this.left_schedules} className="left-filter"><span>{'>'}</span></div>
                                     </div>}
                                 
                                 {(this.state.to_get==='Stage'||this.state.to_get==='Zone'||this.state.to_get==='Time'||this.state.to_get==='Dom')&&<div style={{width:sz<600&&'200px'}} className="select-filter">
                                     {this.state.format.map(e => { return (<div onClick={() => { this.typing(e) }} key={e} style={{width:sz<600&&'16px',height:sz<600&&'18px'}}  className='formats-zero'><span>{e}</span></div>) })}
                                     <div onClick={() => { this.typing('b') }} className='formats-zero'><img src={Back_space} alt='Back_space'className='Back_space'/></div>
                                 </div>}
                             </div>

                             <div onClick={this.search} className='search-bar'>
                                 {this.state.loadsch ?
                               <div className="uploade"></div>
                             : <img src={Search} alt='search' className='light' />}
                             </div>
                             <div onClick={this.filter} className='filter-bar'>
                             <img src={Filter} alt='filter' className='light' />
                             </div>
                         </div>


<div className="show-all">
    <div onClick={() => this.props.history.push('./showall')} className="all-btn">
        <span>show all</span>
    </div>

</div>
                         <div className="scroll-search-data">
                             <div className="left-navigator">
                                 <div style={{marginTop:sz<600&&'-60px'}} onClick={this.left} className="ball"><span>{'<'}</span></div>
                             </div>
                             
                             {sz>600?<div style={{ width: this.state.size<=950&&this.state.size>=650 ? '500px':this.state.size<=650?'300px' : '800px' }} className="overflow-scroll">
                             <div className="overflow-scroll-2">

                                 {this.state.data.map((e,i)=> { return (
                                 
                                 <div style={{left:this.state.left}} key={i} className="data-bite-box">
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

                                             <div className="province-data"><span className="move-left">{`Province: ${e.province}`}</span></div>
                                             <div className="province-data"><span className="move-left">{`Zone: ${e.zone}`}</span></div>
                                             
                                             {(this.state.avoids==='Town'||this.state.avoids==='Municipality')&&<div className="province-data"><span className="move-left">{`Town: ${e.town}`}</span></div>}
                                             {(this.state.avoids==='Town'||this.state.avoids==='Municipality')&&<div className="province-data"><span className="move-left">{`Municipality: ${e.municipality}`}</span></div>}
                                         
                                             {(this.state.avoids!=='Town'&&this.state.avoids!=='Municipality')&&<div className="province-data"><span className="move-left">{`Stage: ${e.stage}`}</span></div>}
                                             {(this.state.avoids!=='Town'&&this.state.avoids!=='Municipality')&&<div className="province-data"><span className="move-left">{`Dom: ${e.dom}`}</span></div>}
                                             {(this.state.avoids!=='Town'&&this.state.avoids!=='Municipality')&&<div className="province-data"><span className="move-left">{`Time: ${e.time}`}</span></div>}
                                         
                                             
                                             
                                         </div>
                                         <div className='selected-data'>
                                         <img src={Issues} alt='issues' className='issues' />
                                         </div>
                                 </div>
                                 
                                 )})}

                                 </div>
                                 </div>:
                                 
                                 <div className="moble-scroll">


{this.state.data.slice(this.state.m_slide,this.state.m_slide+1).map((e,i) => { return (
                                 
                                 <div style={{marginLeft:this.state.size<600&&'0px',}} key={i} className="data-bite-box">
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
                                             
                                         
                                             <div className="province-data"><span className="move-left">{`Province: ${e.province}`}</span></div>
                                             <div className="province-data"><span className="move-left">{`Zone: ${e.zone}`}</span></div>
                                             
                                             {(v==='Town'||v==='Municipality')&&<div className="province-data"><span className="move-left">{`Town: ${e.town}`}</span></div>}
                                             {(v==='Town'||v==='Municipality')&&<div className="province-data"><span className="move-left">{`Municipality: ${e.municipality}`}</span></div>}
                                         
                                             {(v!=='Town'&&v!=='Municipality')&&<div className="province-data"><span className="move-left">{`Stage: ${e.stage}`}</span></div>}
                                             {(v!=='Town'&&v!=='Municipality')&&<div className="province-data"><span className="move-left">{`Dom: ${e.dom}`}</span></div>}
                                             {(v!=='Town'&&v!=='Municipality')&&<div className="province-data"><span className="move-left">{`Time: ${e.time}`}</span></div>}
                                         
                                         
        </div>
                                         <div className='selected-data'>
                                         <img src={Issues} alt='issues' className='issues' />
                                         </div>
                                 </div>
                                 
                                 )})}

                                 </div>
                                 }


                             <div className="right-navigator">
                                 <div style={{marginTop:sz<600&&'-60px'}} onClick={this.right} className="ball"><span>{'>'}</span></div></div>
                         </div>
                     </div>
                       {sz<600&&<div className="one-of">
                       <span>{`${this.state.m_slide+1} of ${this.state.data.length}`}</span>
                       </div>}
                       




                     <div style={{width:sz<=600&&'290px',height:sz<600&&'290px'}} className="map-data">
                         <span className="head-map">Map in Provinces</span>
                         <div style={{width:sz<=600&&'290px',height:sz<600&&'290px'}} className="south-africa">
                             <img style={{width:sz<=600&&'290px',height:sz<600&&'290px'}} src={Map} alt='sa-map' className='sa-map'/>
                             <div style={{width:sz<=600&&'290px',height:sz<600&&'290px'}} className="data-layer">

                                 {this.state.province_schedules.filter(p=>(p.province==="Limpopo")).map(i => {
                                     return (
                                         <div key={i.province} onMouseEnter={(e) => { this.clicking(e, true,i.province) }} onMouseLeave={sz>600?(e) => { this.clicking(e, false,"easterncape")}:null} style={{ backgroundColor: (i.stage==='6'||i.stage==='5') ? 'rgba(255, 123, 0, 0.344)' : (i.stage==='3'||i.stage==='4') ? 'rgba(251, 255, 0, 0.344)' : (i.stage==='0'||i.stage==='1'||i.stage==='2') ? 'rgba(0, 255, 0, 0.344)' : 'rgba(255, 0, 0, 0.344)', width: '40px', height: '40px', marginTop:sz<=600?'40px':'50px', marginLeft:sz<=600?'200px': '280px' }} className="mapz-1">
                                             <div style={{ backgroundColor: (i.stage==='6'||i.stage==='5') ? 'rgb(255, 166, 0)' : (i.stage==='3'||i.stage==='4') ? 'rgb(208, 255, 0)' : (i.stage==='0'||i.stage==='1'||i.stage==='2') ? 'rgb(0, 255, 13)' : 'rgb(255, 0, 0)', width: '20px', height: '20px' }} className="mapz-2">
                                                 <span>{i.stage}</span>
                                             </div>
                                         </div>)})}

                                         {this.state.province_schedules.filter(p=>(p.province==="Mpumalanga")).map(i => {
                                     return (
                                         <div key={i.province} onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'27px',height:'27px',marginTop:sz<=600?'16px':'22px',marginLeft:sz<=600?'212px':'302px'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'12px',height:'12px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}

{this.state.province_schedules.filter(p=>(p.province==="Gauteng")).map(i => {
    return (
        <div key={i.province} onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'20px',height:'20px',marginTop:sz<=600?'-30px':'-28px',marginLeft:sz<=600?'190px':'267px',position:'relative'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'10px',height:'10px',fontSize:'9px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}

{this.state.province_schedules.filter(p=>(p.province==='North West')).map(i => {
    return (
        <div key={i.province} onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'27px',height:'27px',marginTop:sz<=600?'-15px':'-10px',marginLeft:sz<=600?'140px':'200px',position:'relative'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'12px',height:'12px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}

{this.state.province_schedules.filter(p=>(p.province==='KwaZulu-Natal')).map(i => {
    return (
        <div key={i.province} onMouseEnter={(e) => { this.clicking(e, true, i.province) }} onMouseLeave={sz>600?(e) => { this.clicking(e, false, "easterncape") }:null} style={{ backgroundColor: (i.stage === '6' || i.stage === '5') ? 'rgba(255, 123, 0, 0.344)' : (i.stage === '3' || i.stage === '4') ? 'rgba(251, 255, 0, 0.344)' : (i.stage === '0' || i.stage === '1' || i.stage === '2') ? 'rgba(0, 255, 0, 0.344)' : 'rgba(255, 0, 0, 0.344)', width: '27px', height: '27px', marginTop:sz<=600?'10px': '22px', marginLeft:sz<=600?'220px':'310px'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'12px',height:'12px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}


{this.state.province_schedules.filter(p=>(p.province==='Free State')).map(i => {
    return (
        <div key={i.province}  onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'27px',height:'27px',marginTop:sz<=600?'-32px':'-35px',marginLeft:sz<=600?'160px':'230px',position:'relative'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'12px',height:'12px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}

{this.state.province_schedules.filter(p=>(p.province==="Northern Cape")).map(i => {
    return (
        <div key={i.province} onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'40px',height:'40px',marginTop:'-5px',marginLeft:sz<=600?'80px':'100px',position:'relative'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'20px',height:'20px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}


                                 {this.state.province_schedules.filter(p=>(p.province==='Eastern Cape')).map(i => {
    return (<div key={i.province} onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'30px',height:'30px',marginTop:sz<=600?'8px':'15px',marginLeft:sz<=600?'150px':'218px',position:'relative'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'15px',height:'15px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}

{this.state.province_schedules.filter(p=>(p.province==="Western Cape")).map(i => {
    return (
        <div key={i.province} onMouseEnter={(e)=>{this.clicking(e,true,i.province)}} onMouseLeave={sz>600?(e)=>{this.clicking(e,false,"easterncape")}:null} style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgba(255, 123, 0, 0.344)':(i.stage==='3'||i.stage==='4')?'rgba(251, 255, 0, 0.344)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgba(0, 255, 0, 0.344)':'rgba(255, 0, 0, 0.344)',width:'27px',height:'27px',marginTop:sz<=600?'-8px':'0px',marginLeft:sz<=600?'70px':'100px',position:'relative'}} className="mapz-1">
                                     <div style={{backgroundColor:(i.stage==='6'||i.stage==='5')?'rgb(255, 166, 0)':(i.stage==='3'||i.stage==='4')?'rgb(208, 255, 0)':(i.stage==='0'||i.stage==='1'||i.stage==='2')?'rgb(0, 255, 13)':'rgb(255, 0, 0)',width:'12px',height:'12px'}} className="mapz-2">
                                         <span>{i.stage}</span>
                                     </div>
                                 </div>)})}
                                 
                             </div>
                         </div>
                         <div className="data-level">
                             <span>Stage Level</span>
                             <div className="data-level-2">
                                 <span>Low</span>
                                 <div className="color-bar"></div>
                                 <span>High</span>
                         </div>
                         </div>
                     </div>
                   
                 </div>
             </div>
             <div style={{width:this.state.size <=715&&'90%',marginTop:sz<=600&&'40px'}} className='issues-page'>
             <div className='issues-page-info'><span>Issues</span></div>
                 <div style={{flexDirection:this.state.size <=715&& 'row'}} className="wrap-page-issue">
             
                     {this.state.issues.slice(0, 4).map(e => {
                         return (<div onClick={() => this.props.history.push(`./${e._id}`)}  key={e._id} className='comment-issues'>
                             <img src={e.image} alt='issues' className='comment-image' />
                             <div className='comment-address'>
                                 <img src={Location} alt='issues' className='location-image' />
                                 <span>{e.location.length > 37 ? `${e.location.slice(0, 37)} ...` : e.location}</span>
                             </div>
                             <div className="date-issued">
                                 <img src={Time} alt='time' className='time-image' />
                                 <span>{e.date}</span>
                             </div>
                             <div className='comment-writen'>
                                 <div className="label-issue"><span>issue</span></div>
                                 <div className="text-issue">
                                     <div className="text-wrap">
                                         <span>{e.issue.length > 37 ? `${e.issue.slice(0, 229)} ...` : e.issue}</span>
                                     </div>
                                 </div>
                             </div>
                             <div className='comment-button'>
                                 <div style={{backgroundColor:typeof e.resolve[0] === 'object'&&"red"}} className='issues-button'>
                                 <span style={{ color: 'white' }}>{typeof e.resolve[0] !== 'object'?'Open':'close'}</span>
                                    <div className="divide"></div>
                                     <img src={Issues} alt='issues' className='issues-img' />
                                         
                                 </div>
                             </div>
                         </div>)})}

                     </div>
             </div>

         </div>
            );
        }
    }

    const mapStateToProps = state => {
        return {
            anyplay: state.cliReducer,
        }
    };
    
    
export default connect(mapStateToProps, {Showall,Imeko,GeoData,Issue,Position,Pstate,Province})(Home);
