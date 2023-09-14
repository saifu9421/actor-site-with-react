import Cart from "../Cart/Cart";


const Home = () => {
    return (


        <div className="mr-20">
            <Cart></Cart>

            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="Shoes" className="rounded-full w-24 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">antony dsfsd</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, possimus?</p>
    <div className="flex gap-5">
       <p>salary:200</p> 
       <p>Writer</p>
    </div>
    <div className="card-actions">
    <button className="btn btn-outline btn-secondary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;