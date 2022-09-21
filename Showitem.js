import React from 'react';
import './Showitem.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Showitem({ id, task, edit, onSelect, onEdit, editTaskValue }) {
  return (
    <Form>
      <div className='container'>
        <div className='col-6'>
          {edit ? (
            <input
              type='text'
              onChange={(e) => editTaskValue(e.target.value, id)}
              value={task}
            />
          ) : (
            <h5>{task}</h5>
          )}
        </div>

        <div className='col-6'>
          <Button className='btn btn-secondary' onClick={() => onSelect(id)}>
            Del
          </Button>

          {edit ? (
            <Button
              className='btn btn-secondary'
              onClick={() => onEdit(id, true)}
            >
              Save
            </Button>
          ) : (
            <Button className='btn btn-secondary' onClick={() => onEdit(id)}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
}

export default Showitem;
