import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";

const BookingForm = () => {
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center">Book Your Table</h2>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Your Name" aria-label="Your Name" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" />
                    </div>
                    <div className="col">
                        <select id="inputState" className="form-select">
                            <option selected>Select a Service</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <textarea className="form-control" rows="5" placeholder="Please write your comment" aria-label="Please write your comment"></textarea>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <input type="submit" className="btn btn-warning" value="Send Message" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
