import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./Home";
import AddAlbum from "./AddAlbum";
import ViewAlbum from "./ViewAlbum";
import EditAlbum from "./EditAlbum";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddAlbum/>}/>
        <Route path="/view/:id" element={<ViewAlbum/>}/>
        <Route path="/edit/:id" element={<EditAlbum/>}/>
      </Routes>
    </div>
  );
}

export default App;
