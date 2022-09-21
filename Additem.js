import React, { useEffect, useState } from 'react';
import './Additem.css';
import Showitem from './Showitem';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const getLocalItem = () => {
  let list = localStorage.getItem('lists');
  console.log(list);
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
function Additem() {
  const [task, setTask] = useState('');
  const [data, setData] = useState(getLocalItem);
  const [todoEditing, setTodoEditing] = useState();

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);
    setTask('');
    setTodoEditing();
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  const updatedTask = (a, save = false) => {
    if (save) {
      setTodoEditing();
    } else {
      setTodoEditing(a);
    }
  };

  const editTaskValue = (value, index) => {
    const updatedData = [...data];
    updatedData[index] = value;
    setData(updatedData);
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(data));
  }, [data]);

  return (
    <div className='todo'>
      <Form onSubmit={submitHandler}>
        <h3>
          <u>My To do's List</u>
        </h3>
        <br></br>
        <input
          type='text'
          placeholder='Title'
          value={task}
          onChange={onChangeHandler}
        />
        <span />
        <Button variant='secondary' type='Submit'>
          Add
        </Button>
      </Form>

      {data.map((value, index) => {
        return (
          <Showitem
            key={index}
            id={index}
            task={value}
            edit={index === todoEditing}
            onSelect={deleteItem}
            onEdit={updatedTask}
            editTaskValue={editTaskValue}
          />
        );
      })}
    </div>
  );
}

export default Additem;
