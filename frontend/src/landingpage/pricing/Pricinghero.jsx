import zero from '../../assets/pricing.svg'
import intraday from '../../assets/intradayTrades.svg'

function Pricinghero() {
    return ( <>
    <div className="container text-center mt-5">
        <h2>Pricing</h2>
        <p>Free equity investments and flat 220 traday and F&O trades.</p>
        <hr  className='mt-5'/>
        <div className='d-flex container justify-content-evenly mt-5'>
            <div>
            <img src={zero} alt="" width="100%" />
            <h3>Free equity delivery</h3>
            </div>
            <div>
            <img src={intraday} alt="" width="100%" />
            <h3>Intraday and F&O Trades</h3>
            </div>
            <div>
            <img src={zero} alt=""  width="100%"/>
            <h3>Free Debt </h3>
            </div>
        </div>

    </div>
    </> );
}

export default Pricinghero;