

const Contact = () => {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Us</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1" htmlFor="">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter full name" />
                                    </div>
                                    <div className="form-group py-2">
                                        <label className="mb-1" htmlFor="">Phone</label>
                                        <input type="tel" className="form-control" placeholder="+91 76675XXX" />
                                    </div>
                                    <div className="form-group py-2">
                                        <label className="mb-1" htmlFor="">Email</label>
                                        <input type="mail" className="form-control" placeholder="abc@gmail.com" />
                                    </div>
                                    <div className="form-group py-2">
                                        <label className="mb-1" htmlFor="">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Enter your messages..."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>#Punjab, India</p>
                                    <p>Phone: +91 7667516XXX</p>
                                    <p>Email: reactlusmail@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;