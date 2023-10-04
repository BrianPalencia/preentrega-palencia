import './App.css';
import NavBar from './components/NabBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bulma/css/bulma.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ' ,quantity)}/>  
      <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
