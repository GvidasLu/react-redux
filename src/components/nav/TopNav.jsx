import {Button, ButtonGroup} from "react-bootstrap"
import React from 'react'
import {filterTodo} from "../../store/actions/TodoAction"
import {connect} from "react-redux"

const TopNav = (props) => {
  let {filterTodo} = props
  return (
    <ButtonGroup>
        <Button variant="primary" onClick={()=>filterTodo('VISOS')} >Visos uzduotyd</Button>
        <Button variant="danger" onClick={()=>filterTodo('AKTYVIOS')} >Aktyvios</Button>
        <Button variant="success" onClick={()=>filterTodo('PABAIGTOS')} >Uzbaigtos</Button>
    </ButtonGroup>
  )
}

export default connect(null, {filterTodo})(TopNav);