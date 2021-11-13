import React from 'react';
import './Contact.css'
import MapDirection from './MapDirection';

const Contact = () => {
    return (
        <div>
            <div className='container card my-5 shadow-lg py-5 contact'>
                <h1 className='fw-bold text-center mb-2'>CONTACT</h1>
                <div className='text-start ms-5 mt-2'>
                    <p><strong><i className="fas fa-location-arrow"></i> Location: </strong>7-14, Nikunja Housing Society, South Khulshi, Chittagong.</p>

                    <p><strong><i className="fas fa-map-marked-alt"></i> Permanent Campus: </strong>Plot# S-1, CDA Kolpolok Residential Area, Bakalia, Chittagong.</p>

                    <p><strong><i className="fas fa-id-card"></i> Contact: </strong>88 031-2869877</p>

                    <p><strong><i className="fas fa-mobile-alt"></i> Mobile: </strong>01851120791, 01773225500, 01773225511</p>

                    <p><strong><i className="fas fa-fax"></i> FAX: </strong>+880312869966</p>

                    <p><strong><i className="far fa-paper-plane"></i> Email: </strong>admission@sumon.edu.bd</p>
                </div>
            </div>

            <div className='container card shadow my-5 py-5 get-in-touch'>
                <h2 className='fw-bold text-center'>Get in Touch with US...</h2>
                <form className="row g-3 mt-3 px-3">
                    <div className="col-md-4">
                        <label for="validationDefault01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Md." required />
                    </div>
                    <div className="col-md-4">
                        <label for="validationDefault02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Sumon" required />
                    </div>
                    <div className="col-md-4">
                        <label for="validationDefaultUsername" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="validationDefault03" className="form-label">City</label>
                        <input type="text" className="form-control" id="validationDefault03" required />
                    </div>
                    <div className="col-md-3">
                        <label for="validationDefault04" className="form-label">State</label>
                        <select className="form-select" id="validationDefault04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="validationDefault05" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="validationDefault05" required />
                    </div>
                    <div className="col-md-12">
                        <label for="validationDefault05" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="validationDefault06" placeholder='@gmail.com' required />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label className="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>

            <div className="container">
                {/* <MapDirection></MapDirection> */}
            </div>
        </div>
    );
};

export default Contact;