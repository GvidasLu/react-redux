import { ListGroup } from 'react-bootstrap'
import ToItem from "./ToItem"
import {connect} from 'react-redux'
import {markDone, deleteTodo} from "../..//store/actions/TodoAction"
import React from 'react'
import FilterTodo from "../../utilities/filterTodo"

const TodoList = (props) => {
  let {todos, markDone, deleteTodo, status} = props
  let filteredTodos = FilterTodo(todos, status)
  return (
    <ListGroup>
      {
        filteredTodos.map(todo =>
          <ToItem 
          key={todo.id}
          todo={todo}
          mark={markDone}
          remove={deleteTodo}
          />
          )
      }
        
    </ListGroup>
  )
}

const mapDispatchToProps = state => ({
  todos:state.todos.todos,
  status: state.todos.filter
})


export default connect(mapDispatchToProps, {markDone, deleteTodo})(TodoList);