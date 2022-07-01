
import React , {useEffect , useState} from 'react';
 
 

export default function Product (props) {
    const { onAdd, books} =  props;

    const [item,setItem] = useState([]);

 useEffect(()=>{
         localStorage.setItem('data' , JSON.stringify(books));
      console.log( books)
    }, [item])

  return (
    <div>
            <div>
                    { books.image }
                    <h2>{books.name}</h2>
                    <div>R{books.price}</div>
                    <div>
                        <button onClick={()=>onAdd(books)}>Add to List</button>
                    </div>
            </div>
     
             {/* <div>
                     {books.image}
                    <h2>{books.name}</h2>
                    <div>R{books.price}</div>
                    <div>
                        <button onClick={()=>onAdd(books)}>Add to List</button>
                    </div>
            </div>  */}
       
        
             {/* <div>
                {books.image}
                <h2>{books.name}</h2>
                <div >R{books.price}</div> 
                <div>
                    <button onClick={()=>onAdd(books)}>Add to List</button>
                </div>
            </div>  */}
     </div>
  
  )

}


