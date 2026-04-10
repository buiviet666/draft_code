import './TodoList.css';
import React, { useState } from 'react'
import type { Item } from './typeTodo';
import Icon from '../../components/Icon';


const TodoList = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const [listTodo, setListTodo] = useState<Item[]>([]);
  const [editInput, setEditInput] = useState<string>('');
  const [filter, setFilter] = useState('all');
  const [toggle, setToggle] = useState(false);

  const listFilter = [
    {
      id: 1,
      name: "all",
    },
    {
      id: 2,
      name: "do",
    },
    {
      id: 3,
      name: "completed",
    },
  ]
  
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
      item.id === value.id ? {...item, checked: check} : item
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

  const filterData = listTodo.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'do') return item.checked === false;
    if (filter === 'completed') return item.checked === true;
    return true;
  })

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

        

        {listTodo.length > 0 && <div style={{
          marginTop: '20px',
          position: 'relative',
          display: 'flex',
          gap: '8px',
        }}>
          <span className='btn' style={{}} onClick={() => setToggle(prev => !prev)}>Filter</span>
          <div className='tableMiniCustom' 
            style={{
              display: toggle ? 'grid' : 'none'
            }}
          >
            {listFilter.map(item => (
              <label style={{display: 'flex', flexDirection: 'row', gap: '8px', cursor: 'pointer'}} onClick={() => setFilter(item.name)}>
                <input type='checkbox' checked={filter === item.name}/>
                <span>{item.name}</span>
              </label>
            ))}
          </div>
          <div className='inputSearch' style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', gap: '8px'}}>
            <input style={{width: '100%'}} required/>
            <p>Search</p>
            <span>
              <i />
            </span>
            <Icon name='search' color='#FFFFFF' size={15} onClick={() => {}} className='iconCustom'/>
          </div>
        </div>}

        {filterData.length > 0 ? <div style={{
          marginTop: '20px',
        }}>
          <ul style={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {filterData.map(item => (
              <div>
                {item.edit ? <div className='containerItem' style={{padding: 0}}>
                  <input 
                    name='todoinputedit' 
                    type='text'
                    value={editInput} 
                    onChange={(e) => {
                      setEditInput(e.target.value);
                    }}
                    className='inputCustom'
                  />
                  <div style={{padding: '10px'}}>
                    <Icon name='close' color='#FFFFFF' size={13} onClick={() => handleEditTodo(item, true)} className='iconCustom'/>
                  </div>
                  <div style={{padding: '10px'}}>
                    <Icon name='check' color='#FFFFFF' size={15} onClick={() => handleEditTodo(item, false, editInput)} className='iconCustom'/>
                  </div>
                </div> :
                <label className='containerItem' style={{cursor: 'pointer'}}>
                  <input className='inputView' checked={item.checked} type='checkbox' 
                    onChange={(e) => {
                      handleCheckTodo(e.target.checked, item)
                    }}
                  />
                  <span className="checkmark"></span>
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
                    <div style={{padding: '10px'}}>
                      <Icon name='bin' color='#FFFFFF' size={15} onClick={() => handleDeleteTodo(item)} className='iconCustom'/>
                    </div>
                    <div style={{padding: '10px'}}>
                      <Icon name='pen' color='#FFFFFF' size={15} onClick={() => {
                          setEditInput(item.name);
                          handleEditTodo(item); 
                        }}
                        className='iconCustom'
                      />
                    </div>
                  </>}
                </label>}
              </div>
            ))}
          </ul>
        </div> : <div style={{marginTop: '20px', textAlign: 'center'}}>You have nothing to do! Add more do more :))</div>}
      </div>
    </div>
  )
}

export default TodoList