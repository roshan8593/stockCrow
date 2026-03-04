function Rightsection({imglink,title,paragragh}) {
    return ( <>

    <div className="container mt-5">
        <div className="row ">

        <div className="col-lg-5 col-md-12 text-muted d-flex flex-column pt-5">
                <h1>{title}</h1>
                <p>{paragragh}</p>
            </div>
            <div className="col-lg-2 col-md-0"></div>
            <div className="col-lg-5 col-md-12">
                <img src={imglink} alt="" style={{width:"100%" , aspectRatio:"1.3/1"}} />
            </div>
           
           
        </div>
    </div>
    </> );
}

export default Rightsection;