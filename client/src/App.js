import './App.css';
import {Router} from '@reach/router';
import AllPets from './components/AllPets';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';
import Error from './components/Error';
import DisplayOnePet from './views/DisplayOnePet';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPets path="/" />
        <CreatePet path="/create" />
        <Error path="/error" />
        <UpdatePet path="/pet/update/:_id" />
        <DisplayOnePet path="/pet/:_id" />
      </Router>
    </div>
  );
}

export default App;
