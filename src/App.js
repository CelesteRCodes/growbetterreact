import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/User/Login';
import ShowUserPlants from './components/Plant/UserPlants';


function App() {
  return (
    <div className="App">
      <h1>Grow Better</h1>
      <Login />
      <ShowUserPlants />   
    </div>
  );
}

export default App;
