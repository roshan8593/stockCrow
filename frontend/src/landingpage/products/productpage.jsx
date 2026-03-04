import Leftsection from "./LeftImage";
import ProductHero from "./productHero";
import kitepng from '../../assets/kite.png'
import console from '../../assets/console.png'
import kiteConnect from '../../assets/kiteConnect.png';
import coin from '../../assets/coin.png'
import varsityimg from '../../assets/varsity.png'
import Rightsection from "./RightImage";



function Productpage() {
    return ( <>
    <ProductHero/>
    <Leftsection  imglink={kitepng} title={"Kite"} paragragh={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices"} />

    <Rightsection imglink={console} title={"console"} paragragh={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."}/>

    <Leftsection  imglink={coin} title={"coin"} paragragh={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS"} />

    <Rightsection imglink={kiteConnect} title={"Kite connect API"} paragragh={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}/>

    <Leftsection  imglink={varsityimg} title={"Varsity mobile"} paragragh={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you leatn on the go."} styles={{marginBottom:"7%"}}  />

    </> );
}

export default Productpage;