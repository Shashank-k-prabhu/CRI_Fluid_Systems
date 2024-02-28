import award from "../assets/1.png";
import award2 from "../assets/2.png";
import products from "../assets/3.png";
const Body = () => {
  return (
    <div>
      <div className="body-1">
        <img id="award" src={award}></img>
        <div className="sub-body">
          <p className="header2">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul>
            <li>
              C.R.I.&#x0027;s energy efficient products are well recognized by
              various Government Institutions, as trustworthy products for
              various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img id="award2" src={award2}></img>
          <p>
            Government of India has awarded the &#34;
            <span> National Energy Conservation Award 2018 </span>&#34;. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div>
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img id="products" src={products}></img>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
    </div>
  );
};
export default Body;
