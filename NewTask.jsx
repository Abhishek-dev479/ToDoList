import React, {useState} from 'react';

function NewTask(props){
    const [isChecked, setCheck] = useState(false);
    const [isDelete, setDelete] = useState(false);

    function handleCheck(){
        setCheck(function(prev){
            return !prev
        })
    }

    function handleDelete(event){
        setDelete(function(){
            return !isDelete
        })
    }
    if(props.new !== ''){
        return(
            <div className='each-task' style={isDelete ? {display: "none"} : null}>
                <input type="checkbox" onChange={handleCheck} checked={isChecked}/>
                <span style={isChecked ? {textDecoration: "line-through"} : null}>{props.new}</span>
                <img src='https://img.icons8.com/color/2x/trash.png' alt='icon' onClick={handleDelete}/>
            </div>
            )
    }
}

export default NewTask;