import React, { useState } from 'react'

type ButtonType = 'All' | 'Active' | 'Completed' | 'Three';

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: TaskType[]
  removeTask: (taskId: number) => void
  deleteAllTasks: () => void
}

export const Todolist = (props: PropsType) => {
  const [filter, setFilter] = useState<ButtonType>('All')
  const changeFilter = (buttonValue: ButtonType) => {
    setFilter(buttonValue)
  }

  const filterTaskArr = () => {
    let tasksForTodolist:TaskType[] = props.tasks
    return filter === 'Active' ? props.tasks.filter((task:TaskType) => !task.isDone)
      : filter === 'Completed' ? props.tasks.filter((task:TaskType) => task.isDone)
        : filter === 'Three' ? props.tasks.slice(0, 3)
        : tasksForTodolist
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          filterTaskArr().map(task => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <button onClick={() => { props.removeTask(task.id) }}>x</button>
              </li>
            )
          })
        }
      </ul>
      <div>
        <div>
          <button onClick={props.deleteAllTasks}>Delete All Tasks</button>
        </div>
        <button onClick={() => changeFilter('All')}>All</button>
        <button onClick={() => changeFilter('Active')}>Active</button>
        <button onClick={() => changeFilter('Completed')}>Completed</button>
        <div>
          <button onClick={() => changeFilter('Three')}>Three</button>
        </div>

      </div>
    </div>
  )
}


//------------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {FilterValuesType} from './App';
//
// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     //changeFilter: (value: FilterValuesType) => void
//     deleteAllTasks:()=>void
// }
//
// export function Todolist(props: PropsType) {
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = props.tasks;
//
//     if (filter === "three") {
//         tasksForTodolist = props.tasks.filter(t => t.id<4);
//     }
//     if (filter === "active") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         <ul>
//             {
//                 tasksForTodolist.map(t => <li key={t.id}>
//                     <input type="checkbox" checked={t.isDone}/>
//                     <span>{t.title}</span>
//                     <button onClick={ () => { props.removeTask(t.id) } }>x</button>
//                 </li>)
//             }
//         </ul>
//         <button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
//         <div>
//             <button onClick={ () => { changeFilter("three") } }>
//                 Give me the first three
//             </button>
//             <button onClick={ () => { changeFilter("all") } }>
//                 All
//             </button>
//             <button onClick={ () => { changeFilter("active") } }>
//                 Active
//             </button>
//             <button onClick={ () => { changeFilter("completed") } }>
//                 Completed
//             </button>
//         </div>
//     </div>
// }