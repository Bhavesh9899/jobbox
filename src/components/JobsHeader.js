import React from 'react'

const JobsHeader = () => {
    return (
        <>
            <h2 className="text-center py-4">Jobs of the Day</h2>
            <form className="row flex justify-content-between mx-5 my-4">
                <div className="col-md-3 my-1">
                    <input type="text" className="form-control" placeholder="Job title or keywords" />
                </div>
                <div className="col-md-3 my-1">
                    <select className='form-select'>
                        <option selected>All location</option>
                        <option value='one'>All location</option>
                        <option value='two'>All location</option>
                    </select>
                </div>
                <div className="col-md-3 my-1">
                    <select className='form-select'>
                        <option selected>All type</option>
                        <option value='one'>All type</option>
                        <option value='two'>All type</option>
                    </select>
                </div>

                <div className="col-md-2 my-1">
                    <button className="btn btn-primary mx-1" type="submit">Search</button>
                    <button className="btn mx-1 border-bottom" type="submit">Clear</button>
                </div>
            </form>
        </>

    )
}

export default JobsHeader