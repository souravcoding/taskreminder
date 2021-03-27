import React, { useState } from 'react'
import Modal from 'react-modal'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Mode({getData}) {
    const [open,setopen]=useState(false)
     const [task,settask]=useState({
         title:'',
         textarea:''
     })

     const handleChange=(e)=>{
        const n=e.target.name
        const v=e.target.value
        settask((old)=>{
          return {...old,[n]:v}
        })
     }

     const sendData=()=>{
            getData(task)
            settask({
                title:'',
                textarea:''
            })
            setopen(false)
     }
    return (<>
        <div className='Items'>
                    <div className="add" >
                        <h3 className="mr-4">Add Items</h3><AddCircleOutlineIcon onClick={()=>{setopen(true)}} className='icon' fontSize="large"/>
                     </div>
                     
     </div>
        <div className="modal"  >
            <Modal 
            style={{ content: {
                    display:'flex',
                    flexDirection:'column',
                     justifyContent:'center',
                    alignItems:'center',
                    background:'rgba(0,0,0,0.2)'
                },overlay : {        
                   height:'80vh'
                  }
  }}
             isOpen={open} onRequestClose={()=>{setopen(false)}}>
            <h2>Add Item To your List</h2>
            <div className="form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" name='title' value={task.title} onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Title"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Add Text</label>
                <textarea name="textarea" value={task.textarea} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={sendData} className="btn btn-lg btn-primary">Add To List</button>
            <button onClick={()=>{setopen(false)}} className="btn btn-lg btn-danger ml-3">Close</button>
            </div>
            </Modal>
        </div>
        </>
    )
}

export default Mode
