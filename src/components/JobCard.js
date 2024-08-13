import React from 'react'

const JobCard = ({input}) => {
    return (
        <div className="col-lg-4 col-md-6 my-2">
            <div className="card">
                <div className="d-flex m-3">
                    <img src="/jobbox/image/hero.jpg" className="card-img-top img-fluid w-25"
                        style={{ borderRadius: '.2rem', marginRight: '.9rem' }} alt="card image" />
                    <div>
                        <h6 className='text-capitalize'>{input}. tech</h6>
                        <p className="small text-capitalize">ahmedabad</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-capitalize">XYZ Compony</h5>
                    <p className="small">Full-time</p>
                    <p className="card-text">job description</p>
                    <small>java,python,.Net</small>
                    <div className="d-flex justify-content-between">
                        <h5>Rs.10000/Month</h5>
                        <a href="#" className="btn btn-sm btn-primary">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard