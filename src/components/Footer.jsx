import "../App.css";
import phone from "../assets/phone-call.png";
import globe from "../assets/icons8-globe-50.png";
import facebook from "../assets/social.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p className="footer-1">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className="footer-2">
        CHEMICALS <span className="red-pipe">|</span> PROCESS POWER WATER{" "}
        <span className="red-pipe">|</span> WASTE WATER OILS{" "}
        <span className="red-pipe">|</span> GAS PHARMA SUGARS{" "}
        <span className="red-pipe">|</span> DISTILLERIES PAPER{" "}
        <span className="red-pipe">|</span> PULP MARINE{" "}
        <span className="red-pipe">|</span> DEFENCE METAL{" "}
        <span className="red-pipe">|</span> MINING FOOD{" "}
        <span className="red-pipe">|</span> BEVERAGE PETROCHEMICAL{" "}
        <span className="red-pipe">|</span> REFINERIES SOLAR BUILDING HVAC FIRE
        FIGHTING <span className="red-pipe">|</span> AGRICULTURE{" "}
        <span className="red-pipe">|</span> RESIDENTIAL
      </p>
      <div className="links">
        <div className="sublinks">
          <img id="icon" src={phone}></img>
          <p>Toll Free 1800 200 1234</p>
        </div>
        <div className="sublinks">
          <img id="icon" src={facebook}></img>
          <p>
            <a>www.facebook.com/cripumps</a>
          </p>
        </div>
        <div className="sublinks">
          <img  id="icon2" src={globe}></img>
          <p>
            <a>www.crigroups.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
