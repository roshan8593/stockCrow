import React from 'react';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return ( <>
    <div className='border ' style={{backgroundColor:"#f5f5f5",marginTop:"auto"}}>

        <div className="row mt-5" style={{width:"100%"}}>
            <div className="col text-center">
                <h3>
                <QueryStatsIcon fontSize="large"></QueryStatsIcon> Stock Crow
                </h3>
                <p>© 2026 Stock Crow Ltd.</p>
                <span><FacebookIcon></FacebookIcon> <XIcon></XIcon> <InstagramIcon></InstagramIcon></span>
                
            </div>
            <div className="col">
                <h6>Company</h6>
                <p>About</p>
                <p>Products</p>
                <p>Pricing</p>
                <p>Refferal Programme</p>
                <p>Carrers</p>
                <p>StockCrow.tech</p>
                <p>Press & Media</p>
            </div>
            <div className="col">
                <h6>Support</h6>
                <p>Contant</p>
                <p>Support portal</p>
                <p>Stock blog</p>
                <p>List of charges</p>
                <p>Downloads & Resources</p>
            </div>
            <div className="col">
                <h6>Account</h6>
                <p>Open an account</p>
                <p>Fund transfer</p>
                <p>60 day challenge</p>

            </div>
        </div>
        <p className='text-muted'>Stock Crow Broking Ltd.: Member of NSE & BSE - SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. - SEBI Registr.
Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cros School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-na Communication, Speedy redressal of the grievances
Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

    </div>
    </> );
}

export default Footer;