
import './App.css';
import Servicio from './componentes/servicios';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ItemCount from './componentes/ItemCount';
import Productos from './containers/Productos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './componentes/CartWidget';
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {
  return (

    <>
      <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route exact path='/' element={<Productos></Productos>}/>
       <Route exact path='/categoria/:idcategory' element={<Productos></Productos>}/>
       <Route exact path='/cart' element={<CartWidget/>}/>
       <Route exact path='/detalle' element={<ItemDetailContainer />}/>
       <Route exact path='/servicio' element={<Servicio></Servicio>}/>
       
       </Routes>
       </BrowserRouter>
     </>
    
  );
}

export default App;
