import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Mode from './Mode';
import Modal from 'react-modal'

import Notes from './Notes'

const getLocalStorage = () => {
    let data = localStorage.getItem('data');
    if (data) {
      return (data = JSON.parse(localStorage.getItem('data')));
    } else {
      return [];
    }
  };


function Home() {
    

    const [img,setimg]=useState('')
    const [data,setdata]=useState(getLocalStorage)
    const [edit,setEdit]=useState(false)
    const [editId,setEditId]=useState(null)
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
    const num=Math.floor(Math.random()*1000)
    const url=`https://picsum.photos/id/${num}/info`
    
    useEffect(()=>{
        async function fetcher(){
            const res =await axios.get(url)
            const data=res.data
            console.log(data);
            const image=  data.download_url

            setimg(image)
        }
        fetcher()
    },[])    

    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data))

    },[data])
    const getData=(task)=>{
        setdata((old)=>{
            return [...old,task]
        }) 
        
    }
  

    
    const delTask=(id)=>{
        setdata((old)=>{
          return old.filter((item, index)=>{
            return index!==id
          })
        })
      }
    
      
      const editItem=(id)=>{
            const specificItem=data.find((item,index)=>index===id)
            setEdit(true)
            setEditId(id)
            setopen(true)
            settask({
                title:specificItem.title,
                textarea:specificItem.textarea
            })
            
      }

      const handleEdit=()=>{
         setdata(
            data.map((item,index)=>{
                if(index==editId){
                  return  {...item,title:task.title,
                  textarea:task.textarea}
                }else{
                return item
                }
            })
         )
         setopen(false)
      }

    return (
        <>
        
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
                  }}}
             isOpen={open} onRequestClose={()=>{setopen(false)}}>
            <h2>Edit Item</h2>
            <div className="form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" name='title' value={task.title} onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Title"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Add Text</label>
                <textarea name="textarea" value={task.textarea} onChange={handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={handleEdit}  className="btn btn-lg btn-secondary">Edit</button>
            <button onClick={()=>{setopen(false)}} className="btn btn-lg btn-danger ml-3">Close</button>
            </div>
            </Modal>
        </div>


        <div className='home'>
            <div className='container'>
                <div className="navb">
                     <img height='80px' src={img} alt="LOGO"/>
                    <Link className='logout' to='/login'> 
                   <h5> </h5>
                   <h5>LOGOUT</h5> 
                    </Link> 
                </div>
                <Mode getData={getData}/>
                <div className='itemList'>
                   <ul> 
                    {data.map((item,index)=>{
                        return  <li> <Notes key={index} editItem={editItem}  id={index} delTask={delTask} item={item}/></li>
                    })}
                    </ul>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Home
