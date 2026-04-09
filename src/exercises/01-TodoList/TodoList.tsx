import './TodoList.css';
import React from 'react'

type Props = {}

const TodoList = (props: Props) => {
  return (
    <div className='container'>
      <div className='content'>
        <h1 className='title'>TO DO LIST</h1>
        <div>
          list
        </div>
      </div>
    </div>
  )
}

export default TodoList