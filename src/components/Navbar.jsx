import "../styles/Navbar.css";
import arroww from "../components/Assets/icons/icon-park-outline_down.png"
import Support from "../components/Assets/icons/fluent_person-support-32-filled.png"
import PersonWalking from "../components/Assets/icons/person-walking 1.png"
import Envelope from "../components/Assets/icons/envelope (1) 1.png"
import bsx from "../components/Assets/icons/bxs_offer.png"
import truck from "../components/Assets/icons/ph_car-profile-fill.png"
import vector from "../components/Assets/icons/Vector.png"
import tabler from "../components/Assets/icons/tabler_world.png"
import arrow from "../components/Assets/icons/weui_arrow-filled.png"

const Navbar = () => {
    return (
      <navbar>
        <div className="top-bar">
          <div>
            <p><img src={Support} alt="" />Support Center<img src={arrow} alt="" /></p>
          </div>
          <div>
            <p><img src={PersonWalking} alt="" />Find Store</p>
          </div>
          <div>
            <p><img src={Envelope} alt="" />Sales@fashionnest.com</p>
          </div>
          <div>
            <p><img src={bsx} alt="" />Offers & Values</p>
          </div>
          <div>
            <p><img src={vector} alt="" />Everyday Savers</p>
          </div>
          <div className="truck">
            <p><img src={truck} alt="" />.....Free International Delivery </p>
          </div>
          <div>
            <p><img src={tabler} alt="" />English<img src={arroww} alt="" /></p>
          </div>
        </div>
      </navbar>
    );
};

export default Navbar;