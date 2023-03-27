import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/Action/todo'
import DisplayCount from './DisplayCount'

const DisplayTodo = ({todos,deleteTodo}) => {
  // const [todos, setTodo] = useState([
  //   {
  //     title: "fist todo",
  //     description: "first todo"
  //   },
  //   {
  //     title: "Second todo",
  //     description: "first todo"
  //   },
  //   { 
  //     title: "third todo",
  //     description: "third todo"
  //   },

  // ])
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
              <Card className='shadow sm mt-3'>
              <Card.Body>
          <h3>All Todo are  Here</h3>
              <DisplayCount/> 

                {
               todos.map((todo,index)=>(<ListGroup.Item key={index}>
                <h4>{todo.title}</h4>
                <p>{todo.description}</p>
                <Button onClick={event=>deleteTodo(todo.id)} variant='danger' size='sm '>Update</Button>
               </ListGroup.Item>)) 
            }
              </Card.Body>
              
            </Card>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps =(state)=>{
  console.log(state.todos);
  return {todos:state.todos}
}

const mapDispatchToProps =(dispatch)=>({
  deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})
export default connect(mapStateToProps,mapDispatchToProps) (DisplayTodo) ;
