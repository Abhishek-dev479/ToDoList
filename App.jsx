import React, {useState} from 'react';
import NewTask from './NewTask';

function App(){

    let demoToDo = [{input: 'Complete Assignment', id: 1},{input: 'Buy Vegetables', id: 2},{input: 'Attend a seminar', id: 3}]

    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(demoToDo);

    function handleInput(event){
        setInput(event.target.value);
    }

    function handleTask(){
        if(input !== ''){
        setTasks(function(previous){
                return [...previous, {input: input, id: previous[previous.length-1].id+1}]
        })
        }
        setInput('');
    }

    let day = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'}

    return(
        <div className='container'>
        <div className='date'>{day.toLocaleDateString(undefined, options)}</div>
        <div className='form'>
            <input type="text" placeholder="Task to be done..." onChange={handleInput} value={input}/>
            <button onClick={handleTask}>Add</button>
        </div>
        <div className='tasks'>
            {tasks.map(function(task){
                return <NewTask key={task.id} new={task.input} />
            })} 
        </div>
        </div>
    )
}

export default App;