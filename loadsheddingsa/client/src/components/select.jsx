import React, { Component } from 'react'
import './issue.css'
import './home.css'

import Issues from './assets/noul.png'
import Location  from './assets/location.png'
import Time from './assets/time.png'
import Delete from "./assets/delete.png"

import Issue from '../issue'
import Imeko from '../imeko'



import { connect } from 'react-redux'


class Select extends Component {
    state = {
        size: window.innerWidth,
        dragging: false,
        files:'',
        type:false,
        words: '',
        handles: false,
       
        selected: [],
        issues:this.props.anyplay.issues,

    }
    
    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
             }
      console.log('size',window.innerWidth)
        window.addEventListener('resize', wide, false)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
               issues:nextProps.anyplay.issues,
            })
        }
    }

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()

      }
      handleDragIn = (e) => {
        e.preventDefault()
          e.stopPropagation()
          this.dragCounter++
          console.log('items', e.dataTransfer.items)
          console.log('file-data',e.dataTransfer)
          if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true})
          }
      }
      handleDragOut = (e) => {
        e.preventDefault()
          e.stopPropagation()
          this.dragCounter--
          if (this.dragCounter > 0) return
          this.setState({dragging: false})
      }

    
      handleDrop = (e) => {    
        e.preventDefault()
          e.stopPropagation()
          this.setState({ dragging: false })
          
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
             const files= e.dataTransfer.files
              const file = files[0];
              let formdata = new FormData();
              formdata.append('file', file)


              let reader = new FileReader();
              reader.readAsDataURL(files[0])
              
              return reader.onload = (f) => {
                  if ((file.type === "image/jpeg" || file.type === "image/png")) {
                    fetch(`https://cloudfoundapi.herokuapp.com/cloudfound/photos`, { method: 'POST', body: formdata }).then((response) => response.json()).then(data => {

                        const { path } = data;
                          this.setState({ files: path, })
                    })
                      e.dataTransfer.clearData()
                      this.dragCounter = 0
                  } else {
                    this.setState({ type: true })
                      setTimeout(() => {
                        this.setState({ type:false })
                    },1000)
                  }


                }
             
          }
      }



    componentDidMount() {
 
        this.props.Imeko(true)
            const st = this.state.issues.filter(e => { return e._id === this.props.match.params.id })
           this.setState({selected:st})
        
        this.dragCounter = 0
        if (this.state.files.length<=0&&typeof this.state.selected[0] === 'object'&& typeof this.state.selected[0].resolve[0] !== 'object') {
            const div = document.querySelector('.drag-drop');
       
            div.addEventListener('dragenter', this.handleDragIn)
            div.addEventListener('dragleave', this.handleDragOut)
            div.addEventListener('dragover', this.handleDrag)
            div.addEventListener('drop', this.handleDrop)
        }
        this.size()
        this.props.Issue()
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })

      }
    componentWillUnmount() {
        if (this.state.files.length<=0&&typeof this.state.selected[0] === 'object'&& typeof this.state.selected[0].resolve[0] !== 'object') {
          const div = document.querySelector('.drag-drop');
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }
        }

  deleting = () => {
          this.setState({files:''})
  }
  
        handleWords = event => {
          const target = event.target;
          const name = target.name;
          const value = target.value;
          this.setState({ [name]: value })
        
  };

  uploads = (e) => {

    let files = e.target.files;
    console.log('ofile',files)
    let file = files[0];
    let formdata = new FormData();
    formdata.append('file', file)


    let reader = new FileReader();
    reader.readAsDataURL(files[0])


    return reader.onload = (e) => {

      if ((file.type === "image/jpeg" || file.type === "image/png")) {

    fetch(`https://cloudfoundapi.herokuapp.com/cloudfound/photos`, { method: 'POST', body: formdata }).then((response) => response.json()).then(data => {

            const { path } = data;
              this.setState({ files: path, })
        })
      } else {
        this.setState({ type: true })
          setTimeout(() => {
            this.setState({ type:false })
        },1000)
      }

}
    
}

    unselect = () => {
        this.setState({ selected:[] })
    }
        
    
    willSelect = (e) => {
        const matrix=this.state.issues.filter(m=> m._id===e)
        this.setState({ selected:matrix })
    }


    submit_issue = () => {

        const gt={name:'sintem',box:'bite',car:'luxy'}
        const updatee = { ...gt, name: 'sive' }
        console.log('update',updatee)
        if(this.state.files.length>=5&&this.state.words.length>=30){
            const date = new Date();
            const year = date.getFullYear()
            const hour = date.getHours();
            const min = date.getMinutes()
            const munt = date.getUTCMonth()
            const day = date.getUTCDay()
        
            const data = {
                image: this.state.files,
                text: this.state.words,
                date: `${day}-${munt}-${year} ${hour}:${min}`,
            }

            this.setState({
                files: '',
                words:'',
            })
        
          fetch(`https://loadsheddingsa.herokuapp.com/loadsheddingapi/resolve/${this.state.selected[0]._id}`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        
          }).then((response) => response.json()).then(data => {
            if (typeof data.erros === 'string') {
              this.setState({ handles: 'request failed' });
              setTimeout(() => {
                this.setState({ handles: false });
              }, 5000)
            } else {
              this.setState({ handles: 'submit successful' });
              setTimeout(() => {
                this.setState({ handles: false,selected:[data] });
                this.props.Issue()
              }, 5000)
            }
          
          
        }).catch(console.log('error occares in issue'))
        }else {
          this.setState({ handles: 'words are less than 30 words' });
          setTimeout(() => {
            this.setState({ handles: false });
          }, 5000)
        }
          }

    
    
    render() {
     
        return ( 
        <div style={{ marginLeft:this.state.size<=600&&'0px',marginTop:this.state.size<=600&&'40px'}} className="issue-component">
                <div style={{ width:typeof this.state.selected[0] !== 'object'?'100%':this.state.size >= 1150 ? '70%' : this.state.size <= 1150 && this.state.size >= 703 ? '50%' : '100%' }} className="issue-comp-box">
                    <div className="text-issues-box">
                        <div className="span-text">
                            <span style={{fontSize:this.state.size <= 1000 &&this.state.size > 600? '20px':this.state.size < 600?'15px' :'30px'}}>The impact of load shedding became evident in the first quarter of 2019 as the inconsistent electrical supply slowed SA's annualised GDP to 3.2%.
                            Ultimately, Eskom's impact on SA's economy is multifold.
                            
                               </span>
                        </div>
                        <div onClick={() => { this.props.history.push('./creat_issue') }} className="create-issue"><span>create issue</span></div>
                    </div>
                    <div className="issue-list">

                    {this.state.issues.map(e => {
                        return (<div onClick={() => { this.willSelect(e._id) } } key={e._id} className='comment-issues'>
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
       
                {typeof this.state.selected[0] === 'object' && this.state.selected.map(e => {
                    return (<div style={{ marginLeft: this.state.size < 600 && '0px', marginTop: this.state.size < 703 && "20px" }} className="issue-comp-solve">
                        <div onClick={this.unselect} className="x-close">
                            <div className="x-close-1"></div>
                            <div className="x-close-2"></div>
                        </div>
                        <span className="issue-id">{`ID:${e._id}`}</span>
                        <img src={e.image} alt='issues' className='comment-image1' />

                        <div style={{ marginLeft: '10px' }} className='comment-address'>
                            <img src={Location} alt='issues' className='location-image' />
                            <span>{e.location.length > 37 ? `${e.location}` : e.location}</span>
                        </div>
                        <div style={{ marginLeft: '10px' }} className="date-issued">
                            <img src={Time} alt='time' className='time-image' />
                            <span style={{ color: 'white' }}>{e.date}</span>
                        </div>

                        <div style={{ marginLeft: '10px' }} className='comment-writen'>
                            <div className="label-issue"><span>issue</span></div>
                            <div className="text-issue">
                                <div className="text-wrap">
                                    <span>{e.issue.length > 37 ? `${e.issue.slice(0, 320)}` : e.issue}</span>
                                </div>
                            </div>
                        </div>
                    
                        <div style={{ marginLeft: '10px' }} className='comment-button'>
                            <div style={{backgroundColor:typeof e.resolve[0] === 'object'&&"red"}} className='issues-button'>
                                <span style={{ color: 'white' }}>{typeof e.resolve[0] !== 'object'?'Open':'close'}</span>
                                <div className="divide"></div>
                                <img src={Issues} alt='issues' className='issues-img' />
                                         
                            </div>
                        </div>

                        <div style={{backgroundColor:(this.state.handles==='request failed'||this.state.handles==='words are less than 30 words')?'red':this.state.handles==='submit successful'&&'chartreuse'}} className="proofu"><span style={{ marginLeft: '6px' }}>{this.state.handles===false?"Proof of Solution":this.state.handles}</span></div>
                        {typeof e.resolve[0] !== 'object' ? <div className="bit-wit"  >
                            {this.state.files.length <= 0 ? <div style={{ borderColor: this.state.type ? 'red' : this.state.dragging && '#07ffde80' }} className="drag-drop">
                                <span style={{ color: this.state.type ? 'red' : this.state.dragging && '#07ffde80' }} className='plus'>+</span>
                                <input className='in-file' type='file' onChange={(e) => { this.uploads(e) }} />
                                <span style={{ color: this.state.type ? 'red' : this.state.dragging && '#07ffde80' }} className='add-image'>{this.state.type ? 'incorrect type of file' : this.state.dragging ? 'Drop here' : 'Add or Drag image here'}</span>
                            </div> :
                    
                                <div className="comment-image1-box">
                                    <img style={{ marginTop: '0px', marginLeft: '0px', position: 'absolute' }} src={this.state.files} alt='issues' className='comment-image1' />
                                    <div className="complery">
                                        <div onClick={this.deleting} className="black-d">
                                            <img src={Delete} alt='delete' className='delete-image1' />
                                        </div>
                                    </div>
                                </div>
                    
                            }
                     
                            <div className="num-words"><span>{`Words ${this.state.words.length} of 221`}</span></div>
                            <textarea name='words' value={this.state.words.slice(0, 220)} onChange={this.handleWords} className='textareas'></textarea>

                            <div className="submit-btn">
                                <div onClick={this.submit_issue} className="submit-btn-1"><span>Submit</span></div>
                            </div>

                        </div> :
                            e.resolve.map(f => {
                                return (<div key={f._id} className="bit-wit"  >
                                    <img src={f.image} alt='issues' className='comment-image1' />

                               
                                    <div style={{ marginLeft: '10px' }} className="date-issued">
                                        <img src={Time} alt='time' className='time-image' />
                                        <span style={{ color: 'white' }}>{f.date}</span>
                                    </div>

                                    <div style={{ marginLeft: '10px' }} className='comment-writen'>
                                        <div className="label-issue"><span>issue</span></div>
                                        <div className="text-issue">
                                            <div className="text-wrap">
                                                <span>{f.text.length > 37 ? `${f.text.slice(0, 320)}` : f.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                    </div>
                                </div>)
                            })
                        }



                    </div>)})}
        </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.cliReducer,
    }
};
 
export default connect(mapStateToProps,{Issue,Imeko})(Select);
