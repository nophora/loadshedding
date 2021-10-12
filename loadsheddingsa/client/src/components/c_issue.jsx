import React, { Component } from 'react'
import "./c_issue.css"
import './issue.css'
import './home.css'
import Delete from "./assets/delete.png"

import Imeko from '../imeko'

import { connect } from 'react-redux'

class C_issue extends Component {

    state = {
        size: window.innerWidth,
        dragging: false,
        files:'',
        type:false,
      words: '',
      location: '',
      handles:false
    }
    
    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
             }
        window.addEventListener('resize', wide, false)
    }

  
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
          }).catch(e=>console.log(e))
        } else {
          this.setState({ type: true })
            setTimeout(() => {
              this.setState({ type:false })
          },1000)
        }

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
                  }).catch(e=>console.log(e))
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
        this.dragCounter = 0
        if (this.state.files.length<=0) {
            const div = document.querySelector('.drag-drop');
       
            div.addEventListener('dragenter', this.handleDragIn)
            div.addEventListener('dragleave', this.handleDragOut)
            div.addEventListener('dragover', this.handleDrag)
            div.addEventListener('drop', this.handleDrop)
        }
        this.size()
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })

      }
    componentWillUnmount() {
        if (this.state.files.length<=0) {
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

  submit_issue =async () => {
    
if(this.state.files.length>=5&&this.state.location.length>=30&&this.state.words.length>=30){
    const date = new Date();
    const year = date.getFullYear()
    const hour = date.getHours();
    const min = date.getMinutes()
    const munt = date.getUTCMonth()
    const day = date.getUTCDay()

    const data = {
      image: this.state.files,
      location: this.state.location,
      issue: this.state.words,
      date: `${day}-${munt}-${year} ${hour}:${min}`,
      solution:'false',
      resolve: []
    }

  this.setState({
    files: '',
    location: '',
    words: '',})

  await fetch(`https://loadsheddingsa.herokuapp.com/loadsheddingapi/issuespost`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)

  }).then((response) => response.json()).then(data => {
    if (data !== 'newIssue added') {
      this.setState({ handles: 'request failed' });
      setTimeout(() => {
        this.setState({ handles: false });
      }, 5000)
    } else {
      this.setState({
        handles: 'submit successful',
        
      });
      setTimeout(() => {
        this.props.history.push('./issue')
      }, 5000)
    }
  
  
}).catch(console.log('error occares in issue'))
}else {
  this.setState({ handles: 'words or location is less than 30 words' });
  setTimeout(() => {
    this.setState({ handles: false });
  }, 5000)
}
  }
  
    render() { 

        
        return (<div  style={{ marginLeft:this.state.size<=600&&'0px',marginTop:this.state.size<=600&&'40px'}} className="c_issue">


<div style={{ marginLeft:this.state.size <600&&'0px', marginTop:this.state.size <703&&"20px"}} className="issue-comp-solve">
                     <div style={{backgroundColor:(this.state.handles==='request failed'||this.state.handles==='words or location is less than 30 words')?'red':this.state.handles==='submit successful'&&'chartreuse'}} className="proofu"><span style={{marginLeft:'6px'}}>{this.state.handles===false?'Create issue':this.state.handles}</span></div>
          
            {this.state.files.length <= 0 ? <div style={{ borderColor: this.state.type ? 'red' : this.state.dragging && '#07ffde80' }} className="drag-drop">
                        <span style={{color:this.state.type?'red':this.state.dragging&&'#07ffde80'}} className='plus'>+</span>
                        <input className='in-file' type='file'  onChange={(e) => { this.uploads(e) }} />
                        <span style={{ color: this.state.type ? 'red' : this.state.dragging && '#07ffde80' }} className='add-image'>{this.state.type ? 'incorrect type of file' : this.state.dragging ? 'Drop here' : 'Add or Drag image here'}</span>
                    </div>:
                    
                   <div className="comment-image1-box">
                        <img style={{ marginTop: '0px', marginLeft: '0px', position: 'absolute' }} src={this.state.files} alt='issues' className='comment-image1' />
                        <div className="complery">
                        <div onClick={this.deleting} className="black-d">
                        <img  src={Delete} alt='delete' className='delete-image1' />
                     </div>
                  </div>
                    </div>
                    
            }
            
            <div className="num-words"><span>{`location ${this.state.location.length} of 110`}</span></div>
                    <textarea style={{height:'60px'}}  name='location' value={this.state.location.slice(0,109)} onChange={this.handleWords} className='textareas'></textarea >

                     
                     <div className="num-words"><span>{`Words ${this.state.words.length} of 221`}</span></div>
                    <textarea name='words' value={this.state.words.slice(0,220)} onChange={this.handleWords} className='textareas'></textarea>

            <div className="submit-btn">
           <div onClick={this.submit_issue} className="submit-btn-1"><span>Submit</span></div>
            </div>

                    </div>


        </div>)
    }
}

const mapStateToProps = state => {
  return {
      anyplay: state.cliReducer,
  }
};

 
export default connect(mapStateToProps,{Imeko})(C_issue);
