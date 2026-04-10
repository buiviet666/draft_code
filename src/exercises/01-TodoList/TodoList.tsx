import './TodoList.css';
import React, { useState } from 'react'
import type { Item } from './typeTodo';
import Icon from '../../components/Icon';

type Props = {}

const TodoList = (props: Props) => {
  const [valueInput, setValueInput] = useState<string>('');
  const [listTodo, setListTodo] = useState<Item[]>([]);
  const [editInput, setEditInput] = useState<string>('');
  console.log("listTodo", listTodo);
  
  const handleSubmitAdd = () => {
    if (valueInput === '') return;
    const value = {
      id: crypto.randomUUID(), 
      name: valueInput,
      checked: false,
      edit: false,
    }
    setListTodo(prev => [...prev, value]);
    setValueInput('');
  }

  const handleDeleteTodo = (value: Item) => {
    const data = listTodo.filter(item => item.id !== value.id);
    setListTodo(data)
  }

  const handleCheckTodo = (check: boolean, value: any) => {
    setListTodo(prev => prev.map(item => 
      item.id === value.id ? {id: value.id, name: item.name, checked: check, edit: item.edit} : item
    ))
  }

  const handleEditTodo = (value: Item, cancel?: boolean, changeName?: string) => {
    if (cancel) {
      setEditInput('');
      setListTodo(prev => prev.map(item => 
        item.id === value.id ? {...item, edit: false} : item
      ))
      return
    }

    if (changeName) {
      setListTodo(prev => prev.map(item => 
        item.id === value.id ? {...item, name: changeName, edit: false} : item
      ))
      setEditInput('');
      return;
    }

    setListTodo(prev => prev.map(item => 
      item.id === value.id ? {...item, edit: true} : item
    ))
  }
  
  return (
    <div className='container'>
      <div className='content'>
        <h1 className='title'>TO DO LIST</h1>
        <div style={{
          display: 'flex',
          gap: '4px',
        }}>
          <input name='todoinput' type='text' onChange={(e) => setValueInput(e.target.value)} value={valueInput} className='inputCustom' placeholder='Add something :D'/>
          <span onClick={handleSubmitAdd} className='btn'>Add</span>
          {listTodo.length > 0 && <span onClick={() => setListTodo([])} className='btn'>Clear</span>}
        </div>
        <div style={{
          marginTop: '20px',
        }}>
          <ul style={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {listTodo.map(item => (
              <div>
                {item.edit ? <div className='containerItem'>
                  <input 
                    name='todoinputedit' 
                    type='text'
                    value={editInput} 
                    onChange={(e) => {
                      setEditInput(e.target.value);
                    }}
                    className='inputCustom'
                  />
                  <Icon name='close' color='#FFFFFF' size={13} onClick={() => handleEditTodo(item, true)} className='iconCustom'/>
                  <Icon name='check' color='#FFFFFF' size={15} onClick={() => handleEditTodo(item, false, editInput)} className='iconCustom'/>
                </div> :
                <div className='containerItem'>
                  <input checked={item.checked} type='checkbox' 
                    onChange={(e) => {
                      handleCheckTodo(e.target.checked, item)
                    }}
                  />
                  <li style={{
                    textDecoration: item.checked === true ? 'line-through' : '',
                    color: item.checked === true ? '#aaa' : '#000000',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    display: 'flex',
                  }}>
                    {item.name}
                  </li>
                  {!editInput && <>
                    <Icon name='bin' color='#FFFFFF' size={15} onClick={() => handleDeleteTodo(item)} className='iconCustom'/>
                    <Icon name='pen' color='#FFFFFF' size={15} onClick={() => {
                        setEditInput(item.name);
                        handleEditTodo(item); 
                      }}
                      className='iconCustom'
                    />
                  </>}
                </div>}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList