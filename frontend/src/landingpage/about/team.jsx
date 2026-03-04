import React from 'react';
import Peopleimg from '../../assets/people.png'
function TeamAbout() {
    return ( <>
<hr />
    <div className="container mt-5">
        <h1 className='text-center mb-5'>Developer</h1>
        <div className="row">
            <div className="col-lg-6 col-md-12">
            <div className='text-center mb-5'>
           <img src={Peopleimg} alt="People" style={{width: "27%",
    aspectRatio: "1/1",
    borderRadius: "50%"}} />
           <h6>Roshan kumar</h6>
           </div>
            </div>
            <div className="col">
                <p className='text-muted'>Stock Crow was conceptualized and developed with dedication and precision by Roshan Kumar. With a strong passion for technology and financial innovation, he built the platform from the ground up, focusing on performance, clean design, and seamless user experience. Every feature reflects his commitment to transparency, simplicity, and modern engineering standards. Through continuous learning and hands-on development, Roshan transformed Stock Crow into a technology-driven investment platform built to empower users and redefine the way individuals interact with financial markets.</p>
            </div>
        </div>
    </div>
   
    
    </>  );
}

export default TeamAbout;