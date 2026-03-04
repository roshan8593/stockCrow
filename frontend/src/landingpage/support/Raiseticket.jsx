import React from "react";
import './raiseTicket.css'
function Raiseticket() {
  return (
    <div className="container">
      <div className="row py-5">
        <h1 className="fs-2 mb-5 text-center">
          To create a ticket, select a relevant topic
        </h1>

        {/* Column 1 */}
        <div className="col-lg-4 col-md-6 mb-4 text-center ">
          <h5><i className="fa fa-plus-circle me-2"></i>Account Opening</h5>
          <ul className="list-unstyled mt-3 " style={{lineHeight:2}}>
            <li><a href="#">Online Account Opening</a></li>
            <li><a href="#">Offline Account Opening</a></li>
            <li><a href="#">NRI Account Opening</a></li>
            <li><a href="#">Company / HUF Account</a></li>
            <li><a href="#">Charges & AMC</a></li>
            <li><a href="#">Track Application Status</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <h5><i className="fa fa-user me-2"></i>Your Account</h5>
          <ul className="list-unstyled mt-3" style={{lineHeight:2}}>
            <li><a href="#">Login Credentials</a></li>
            <li><a href="#">Update Email / Mobile</a></li>
            <li><a href="#">Segment Activation</a></li>
            <li><a href="#">Nominee Addition</a></li>
            <li><a href="#">Account Modification</a></li>
            <li><a href="#">Closing Account</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <h5><i className="fa fa-line-chart me-2"></i>Trading & Markets</h5>
          <ul className="list-unstyled mt-3" style={{lineHeight:2}}>
            <li><a href="#">Margin & Leverage</a></li>
            <li><a href="#">Order Rejection</a></li>
            <li><a href="#">Intraday Rules</a></li>
            <li><a href="#">F&O Trading</a></li>
            <li><a href="#">IPO Application</a></li>
            <li><a href="#">Corporate Actions</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <h5><i className="fa fa-money me-2"></i>Funds</h5>
          <ul className="list-unstyled mt-3" style={{lineHeight:2}}>
            <li><a href="#">Add Funds</a></li>
            <li><a href="#">Withdraw Funds</a></li>
            <li><a href="#">UPI / Netbanking</a></li>
            <li><a href="#">Payout Timeline</a></li>
            <li><a href="#">Ledger Report</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <h5><i className="fa fa-desktop me-2" ></i>Kite Platform</h5>
          <ul className="list-unstyled mt-3" style={{lineHeight:2}}>
            <li><a href="#">Kite Web</a></li>
            <li><a href="#">Kite Mobile App</a></li>
            <li><a href="#">Charts & Indicators</a></li>
            <li><a href="#">Order Types</a></li>
            <li><a href="#">API Access</a></li>
          </ul>
        </div>

        {/* Column 6 */}
        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <h5><i className="fa fa-file-text me-2" ></i>Reports & Console</h5>
          <ul className="list-unstyled mt-3" style={{lineHeight:2}}>
            <li><a href="#">Tax P&L Report</a></li>
            <li><a href="#">Trade Book</a></li>
            <li><a href="#">Holding Statement</a></li>
            <li><a href="#">Contract Notes</a></li>
            <li><a href="#">Download Statements</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Raiseticket;