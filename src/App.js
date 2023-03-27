import './App.css';
// import 
import {Container} from 'react-bootstrap';
// import  AddTodo from './componeant/AddTodo';
import  AddTodo  from "./componeant/AddTodo";
// import DisplayCount from './componeant/DisplayCount';
import DisplayTodo from './componeant/DisplayTodo';
import { Provider } from 'react-redux';
import store from './redux/Store';


function App() {
  return (
   <Provider store={store}>
     <Container> 
         <AddTodo/>
         <DisplayTodo />
    </Container>
   </Provider>
  
  );
}

export default App;
