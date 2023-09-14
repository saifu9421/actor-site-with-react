

const Cart = ({seletedActors,remaining,totalCost}) => {
          
    console.log(seletedActors);
          
    return (

        <div className="text-right mt-20 mr-28  ">
     <h1 className="text-3xl text-yellow-200">This is card</h1>

     <h3 className="text-yellow-100">total actors:{seletedActors.length}</h3>
     <h5 className="text-yellow-200">
     remaining:{remaining}
     </h5>

     <h5 className="text-yellow-100">
        Totalcoust:{totalCost}
     </h5>

     {
        seletedActors.map(actor=> (
            <li key={actor.id} className="text-yellow-100">
                {actor.name}
            </li>
        ))
     }
     
        </div>
    );
};

export default Cart;