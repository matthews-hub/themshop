import React from "react";
import productList from "./ProductsJS"; 

function BookMark(props){
  const {listofbook, onAdd, onRemove} = props;
  console.log(listofbook)
    return(
  
        <aside className="containers col-1">
           <h1>BOOMARK</h1> <hr></hr>
            
            <div>{listofbook.length === 0 && <div className="col-2">Bookmark is Empty</div>}</div>
            {listofbook.map((item) =>(
                <div key={item.id} className="row"> 

                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            {item.qty}
                            {<button onClick={()=>onRemove(item)} className="remove">-</button> }
                    </div>
                    <div>
                        {/* {item.qty} x R{item.price.tofixed(2)} */}
                        R{item.price} 
                    </div>
                </div>
                 
            ))}
            </aside>
    )
}

export default BookMark;


 