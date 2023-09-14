/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
const Home = () => {
     
     const[allActors,setAllActors] = useState([]);

        useEffect(()=>{
              fetch('./data.json') 
              .then(res=> res.json())
              .then(data=> setAllActors(data))
        },[]);
              
          console.log(allActors);

    return (
          

   <>
       <div className="flex">
       
       
        <div className="ml-9 grid lg:grid-cols-3 gap-10 mt-20">

        {
          allActors.map((actor) => ( <div key={actor.id} className="card w-72 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={actor.image} alt="Shoes" className="rounded-full w-24 " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">name:{actor.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, possimus?</p>
            <div className="flex gap-5">
               <p>salary:{actor.salary}</p> 
               <p>role:{actor.role}</p>
            </div>
            <div className="card-actions">
            <button className="btn btn-outline btn-secondary">Select</button>
            </div>
          </div>
        </div>) )
        }

      </div>
      <Cart></Cart>
      </div>

     </>
    );
};

export default Home;