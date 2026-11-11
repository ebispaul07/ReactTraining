import './App.css';

import Header from './Components/Header'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './Components/Sample';
import Counterapp from './Components/Counterapp';
import Propsstudy from './Components/Propsstudy'
import Keys from './Components/Keys'
import NewPropsStudy from './Components/NewPropsStudy';

import Posts from './ApiStudy/Posts'
import Effects from './ApiStudy/Effects'

import MainRouter from './ReactRouter/MainRouter';

import UseStateStudy from './Hooks/UseStateStudy';
import UseEffectStudy from './Hooks/UseEffectStudy';
import UseRefStudy from './Hooks/UseRefStudy';
import SpreadOperatorStudy from './SpreadOperator/SpreadOperatorStudy';

function App() {

  const name ="ebi";

  // const fun = () =>{
  //   return "i am a function";
  //   }

  return (
    
    <>
      
      <h1>hello</h1>
      <p>Welcome to React</p>
      <h1>{name}</h1>
      
      <Home/>
      <Header/>
      <Sample/>
      
      <Counterapp/>
      <Propsstudy/>
      <Keys/>
      <NewPropsStudy/>
      <Effects/>
      <Posts/>

      <MainRouter/>
      <UseStateStudy/>
      <UseEffectStudy/>
      <UseRefStudy/>
      <SpreadOperatorStudy/>
    </>
  );
}

function row(){
  return(
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  );
}



export default App;
