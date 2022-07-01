import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SelectItems from './components/selectitems';
import BookMark from './components/bookmark';
import productList from './components/ProductsJS';
import books from './components/ProductsJS'
import { useState } from 'react';
 
 
 

function App(props) {
  const {books} = productList;
  const [listofbook, setlistofbook] = useState([]);

  //accepts the items  that needs to be addeds
  const onAdd = (books) => {
    const exist = listofbook.find(x => x.id === books.id);
    if(exist){
      setlistofbook(listofbook.map((x) => 
      x.id === books.id ? {...exist, qty: exist.qty + 1} : x
      )
      ); 
    }else{
      // setlistofbook([...listofbook, {...books, qty: 1}]); able yo dsiplay the name and price
      setlistofbook([...listofbook, {...books, qty: 1}]);
    }
  };

    //accepts the items  that needs to be subtracted
  const onRemove = (books) => {
    const exist = listofbook.find((x) => x.id === books.id)
    if (exist.qty === 1) {
      setlistofbook(listofbook.filter((x) => x.id !== books.id ));  
  } else {
    setlistofbook(listofbook.map((x) => 
    x.id === books.id ? {...exist, qty: exist.qty - 1} : x
    )
    ); }
  }

  return (
    <div className="App">
      <Header/>  
      <div className="row">
        <SelectItems onAdd={onAdd} books={books}/>
        <BookMark onAdd={onAdd} onRemove={onRemove} listofbook={listofbook}></BookMark>
        <footer/> 
      </div>
    </div>
  );
}

export default App;
