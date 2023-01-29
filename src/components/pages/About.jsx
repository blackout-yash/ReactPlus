import Vision from "./include/Vision";


const About = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5>Our Company</h5>
                    <div className="underline"></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem ratione magni saepe earum quam iure id, totam blanditiis? Error, temporibus? Voluptatibus laudantium voluptate porro officia est natus temporibus id quos! Aliquam quos corrupti quidem officia sunt veritatis blanditiis exercitationem quibusdam eaque, maxime beatae, reprehenderit dolorum eligendi optio ut fugiat accusamus explicabo error quaerat? Exercitationem numquam ut perspiciatis odit porro, non, enim ea suscipit earum eius fugiat voluptas. Eaque numquam quo quasi neque obcaecati modi officia sapiente, in deleniti necessitatibus.</p>
                </div>
            </section>

            <Vision/>
        </div>
    )
  }
  
  export default About;