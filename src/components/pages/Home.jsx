import Slider from "../includes/Slider";
import { Link } from 'react-router-dom';
import Vision from "./include/Vision";
import Service from "./include/Service";


const Home = () => {
  return (
    <div>
      <Slider />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sint tempora at! Eius praesentium corrupti amet, porro dignissimos neque, provident unde molestiae suscipit consequatur quo! Asperiores hic sequi vero alias facilis et, id voluptates porro excepturi incidunt? Tempora, inventore, quae cupiditate itaque iure deleniti beatae, sit impedit modi autem et.</p>
              <Link to='/about' className="btn btn-warning shadow">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      <Vision />
      <Service/>

    </div>
  )
}

export default Home;