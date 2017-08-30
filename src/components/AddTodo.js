import React from 'react';

const AddTodo = ({addTodoHandler}) => {

  const onSubmit = (event) => {
    event.preventDefault() //prevent default so the form doesn't create a page reload
    const todo = { //build a todo based on the datamodel
      name: event.target.name.value,
      category: event.target.category.value
    }
    addTodoHandler(todo) //call the handler with the todo
  }

  return ( //the handler declared above is given to the form's onSubmit event
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" />
      </div>
      <button>Add Todo</button>
    </form>
  )
}

export default AddTodo;