function Brokerage() {
    return ( <>

    <div className="container ">
        <div className="row">
            <div className="col-lg-8 ">
                <h5 className="text-center mb-3"  style={{color:"#1B76D2"}}>Brokerage calculator</h5>
                <ul className="text-muted" style={{lineHeight:"2.4"}}>
                    <li> Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
                    <li> Digital contract notes will be sent via e-mail.</li>
                    <li> Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                    <li> For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower)</li>
                    <li>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower)</li>
                    <li> If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
                </ul>

            </div>
            <div className="col-lg-4 ">
                <h5 className="text-center" style={{color:"#1B76D2"}}>List of charges</h5>
            </div>
        </div>
    </div>
    </> );
}

export default Brokerage
;