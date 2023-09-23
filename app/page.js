"use client"
import { list } from 'postcss'
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])



  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setmainTask([]);
      return (
        renderTask = <h2>Please enter both title and description.</h2>
      );
    }
    setmainTask([...mainTask, { title, description }]);
    settitle("")
    setdescription("")
    // console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }


  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between  w-2/3'>
            <h5 className='text-2xl text-gray-800'>{t.title}</h5>
            <h6 className='text-lg text-gray-800'>{t.description}</h6>
          </div>
          <button onClick={() => {
            deleteHandler(i);
          }
          }
            className='bg-indigo-200 px-4 py-2 rounded font-bold text-white hover:bg-indigo-300 shadow-lg'>Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      {/* With React Fragment, you can render multiple elements of a component without adding extra div tags.  */}

      <h1 className='bg-indigo-500 text-center p-4 font-bold text-4xl text-white w-full'>Todo List</h1>

      <form onSubmit={SubmitHandler}>
        <input type='text' className='text-2xl border-4 outline-none rounded-md m-8 px-4 py-2 border-indigo-300' placeholder='Enter task here' required
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input type='text' className='text-2xl border-4 outline-none rounded-md m-8 px-4 py-2 border-indigo-300' placeholder='Enter Description here' required
          value={description}
          onChange={(e) => {
            setdescription(e.target.value)
          }}
        />
        <button className='bg-indigo-800 text-white text-2xl px-4 py-2 m-8 rounded-lg font-bold hover:bg-indigo-900 shadow-lg'>Add Task</button>
      </form>
      <hr />
      <div className='bg-slate-200 p-8'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page