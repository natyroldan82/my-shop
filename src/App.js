
import './App.css';

import Header from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './componentes/ItemCount';
import Productos from './containers/Productos';


import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (

    <>
     
    
      <Header></Header>

      
       <ItemDetailContainer/>
      
     
      
     
      </>
    
  );
}

export default App;
