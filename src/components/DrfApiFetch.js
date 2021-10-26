import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DrfApiFetch = () => {

    const [tasks,setTask] = useState([])

    useEffect(() =>{
        axios.get("APIendpoint",{
            headers: {
                "Authorization": "Token hashCode" 
            }
        })
        .then(res => {setTask(res.data)})
    },[])

    return (
        <div>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.title} {task.id}</li>)}
            </ul>
        </div>
    )
}

export default DrfApiFetch
