import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount';
import {addTodo} from '../redux/Action/todo'
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const Addtodo = ({addTodo}) => {
  const [todo, setTodo] = useState({
    id:'',
    title: '',
    description: ''
  });
  //  mehtod for submit form 
  const handelSubmit = (event) => {
    event.preventDefault();
    addTodo({...todo,id:v4()})
    addTodo(todo);
    // console.log(todo);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <Card className='shadow sm'>
              <Card.Body>
                <h3> Add Todo Here  !! </h3>
                {/* form */}
                <DisplayCount />
                <Form onSubmit={handelSubmit}>
                  {/* title */}
                  <Form.Group >
                    <Form.Label> Todo List Title !!</Form.Label>
                    <Form.Control type='text'
                      placeholder='Enter list'
                      value={todo.title}
                      onChange={event => setTodo({ ...todo, title:event.target.value })}></Form.Control>
                  </Form.Group>
                  {/* Descrption */}
                  <Form.Group className='mt-3'>
                    <Form.Label> Todo List Description !!</Form.Label>
                    <Form.Control as={'textarea'}
                      type='text' placeholder='Enter Description '
                      value={todo.description}
                      onChange={event => setTodo({ ...todo, description:event.target.value })}></Form.Control>
                  </Form.Group>
                  <Container className='text-center mt-3 '>
                    <Button type='submit' variant='primary'>
                      Add Todo
                    </Button>
                  </Container>

                </Form>



              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
const mapStateToProps = (state)=>({})

const mapDispatchToProps = (dispatch)=>({
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})
export default connect(mapStateToProps,mapDispatchToProps) (Addtodo);
