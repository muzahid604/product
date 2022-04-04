import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Dashbord from './components/Dashbord/Dashbord';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>

    </div>
  );
}

export default App;
