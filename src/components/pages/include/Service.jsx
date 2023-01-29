import { Link } from "react-router-dom";
import service1 from "../../images/service.jpg";


export const Service = () => {
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Our Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={service1} className="w-100 border-bottom" alt="Service" />
                            <div className="card-body">
                                <h6>Service 1</h6>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem incidunt minima minus dolores dolorum deserunt, iusto eos officiis inventore?</p>
                                <Link to="/about" className="btn btn-link">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={service1} className="w-100 border-bottom" alt="Service" />
                            <div className="card-body">
                                <h6>Service 2</h6>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem incidunt minima minus dolores dolorum deserunt, iusto eos officiis inventore?</p>
                                <Link to="/about" className="btn btn-link">read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={service1} className="w-100 border-bottom" alt="Service" />
                            <div className="card-body">
                                <h6>Service 3</h6>
                                <div className="underline"></div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti autem incidunt minima minus dolores dolorum deserunt, iusto eos officiis inventore?</p>
                                <Link to="/about" className="btn btn-link">read more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;