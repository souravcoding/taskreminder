import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
function Notes({item,id,delTask,editItem}) {
    const [taskDone,setTaskDone]=useState(false)
    const {title,textarea}=item
    const delItem=()=>{
        delTask(id)
    }

    const done=()=>{
        setTaskDone(!taskDone)
    }
    
    const editing=()=>{
       
        editItem(id)
    }
    return (
      
        <div className={taskDone ? 'notes completed' :'notes'}>
        
            <h4>{title}</h4>
            <p>{textarea}</p>
              <DeleteIcon onClick={delItem} className='delete'/> 
              <EditIcon onClick={editing}  className='edit'/>  
              <CheckCircleOutlineIcon onClick={done}  className='done'/> 

        </div>
    )
}

export default Notes
