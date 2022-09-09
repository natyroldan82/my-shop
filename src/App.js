
import './App.css';

import Header from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListConteiner';
import Productos from './containers/Productos';


function App() {
  return (
    <>
   
      <Header></Header>
      <ItemListContainer></ItemListContainer>
      <div className='App'>
      <Productos></Productos>
      </div>
     
    </>
    
  );
}

export default App;
