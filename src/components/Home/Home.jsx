/* eslint-disable react/jsx-key */
import './Home.css';
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
const Home = () => {
     
     const[allActors,setAllActors] = useState([]);
        const [seletedActors,setSeletedActors] = useState([]);
        const [remaining , setReamining] =  useState(0);
      const [totalCost ,setTotalCost ] =  useState(0);
        useEffect(()=>{
              fetch('./data.json') 
              .then(res=> res.json())
              .then(data=> setAllActors(data))
        },[]);
         

            const handleSelectActor = actor =>{
                const isExist = seletedActors.find(item=>item.id==actor.id)
                let count =  actor.salary;
                if(isExist){
                 return alert("All ready book")
                }else{
                      seletedActors.forEach(item=>{
                        count =  count + item.salary
                      });
                      console.log(count);

                      const totalRemainng = 20000-count;
                      setTotalCost (count);
                      if(totalCost > 20000){
                       return alert ("taka sesh ar hbe na");
                      }else{
                        setReamining(totalRemainng);
                        setSeletedActors([...seletedActors,actor]);
                      }
                 
                }
              
          };
         
    return (
   <>
       <div className="flex">
       
       
        <div className="ml-9 grid lg:grid-cols-3 gap-10 mt-20">

        {
          allActors.map((actor) => ( <div key={actor.id} className="card w-72  shadow-2xl">
          <figure className="px-10 pt-10">
            <img src={actor.image} alt="Shoes" className="rounded-full w-24 " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-yellow-50">name:{actor.name}</h2>
            <p className='text-yellow-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, possimus?</p>
            <div className="flex gap-5 text-yellow-100">
               <p>salary:{actor.salary}</p> 
               <p>role:{actor.role}</p>
            </div>
            <div className="card-actions">

            <button onClick={()=>{
                 handleSelectActor(actor)
            }} className="btn btn-outline btn-warning">Select</button>

            </div>
          </div>
        </div>) )
        }

      </div>
      <Cart
         seletedActors={seletedActors}
         remaining={remaining}
         totalCost={totalCost}
    
      >
    
      </Cart>
      </div>

     </>
    );
};

export default Home;