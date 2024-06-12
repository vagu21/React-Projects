import React, { useState } from 'react'

const TodoList = () => {
    const [task,setTask]=useState("");
    const [todos,SetTodos]=useState([])
    const changeHandler=e=>{
        setTask(e.target.value);
    }
    const submitHandler=e=>{
        e.preventDefault();
        SetTodos([...todos,task]);
        setTask("");
    }
    const deleteHandler=(indexValue)=>{
        const newTo=todos.filter((todo,index)=>index!=indexValue)
        SetTodos(newTo)
    }
  return (
    <div>
        <center>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>Todo Application</h5>
                    <form onSubmit={submitHandler}>
                <input size="40" type="text" value={task} onChange={changeHandler} />&nbsp;&nbsp;
                <input type="submit"  value="Add" name="Add"/>
            </form>
                    
                </div>
            </div>
            <div>
             {
            todos.map((item,index)=>{
                return <div key={index}>
                   <h5>{item} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h5> 
                </div>
            })
                  
                
             }
            </div>
           
        </center>
    </div>
  )
}

export default TodoList