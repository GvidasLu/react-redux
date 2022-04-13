import React from 'react'

const FilterTodo = (todo, status) => {
  switch (status) {
      case 'AKTYVIOS':
      return todo.filter(todo => todo.isComplete === false)
      case 'PABAIGTOS':
          return todo.filter(todo =>todo.isComplete === true)
          default: return todo;
  }
}

export default FilterTodo