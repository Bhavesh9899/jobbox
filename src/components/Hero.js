import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="container col-xxl-8 px-4 py-5 hero">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-12 col-sm-12 col-lg-6" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                    <img src="/jobbox/image/hero.jpg" className="d-block mx-lg-auto img-fluid hero-img" alt="Bootstrap Themes"
                        width="450" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6 hero-article">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1">The <span style={{ color:'var(--primary)'}}>Easiest Way</span> to Get Your New Job
                    </h1>
                    <p className="small">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                        most
                        popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                        extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <input type="text" className="form-control" />
                        <button className="btn btn-dark">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero