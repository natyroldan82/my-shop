
import './App.css';

import Header from './componentes/NavBar';
import Card from './componentes/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListConteiner';
//import Title from './componentes/Title';

//import {Navagacion0,Navegacion1} from './componentes/Navegacion';<Navagacion0></Navagacion0>
    //  <Navegacion1></Navegacion1>

function App() {
  return (
    <>
   
      <Header></Header>
      <ItemListContainer></ItemListContainer>
      <Card></Card>
     
    </>
  );
}

export default App;
