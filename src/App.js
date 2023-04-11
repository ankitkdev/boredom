import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBore } from './store/boredom/actions';
import { useEffect } from 'react';

function App() {

  const boreData = useSelector(state => state.bore);
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getBore());
},[])
console.log(boreData)
  return (
    <div className="App">
      <h1>{boreData.data.activity}</h1>
    </div>
  );
}

export default App;
