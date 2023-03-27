import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux';

const DisplayCount = () => {
  return (
    <Card className='shadow sm boredr-0'>
      <Card.Body>
         <h4>
          Number of  Todo:{}</h4>
      </Card.Body>
    </Card>
  )
}
 const mapStateToProps = (state)=>({todos:state.todos});
 const mapDispatchToProps = (dispatch)=>({})
export default connect(mapStateToProps,mapDispatchToProps) (DisplayCount)
