import React from "react";
import Product from "./Product";

function SelectItems(props){
    const {books, onAdd} = props;
    return(
      <main className="containers col-2">
          <h1 className="selectbook">Select Your Favourate Book</h1>
          <hr/>
          <div className="row">
            {books.map((books) =>(
                <Product key={books.id} books={books} onAdd={onAdd}></Product>
            ))}
          </div>
      </main>
    )
}

export default SelectItems;