import "../styles/Image.css"
import woman from "../components/Assets/Pictures/carefree-dark-skinned-woman.png";

const Image = () => {
    return (
        <div className="image-section">
            <div className="text-container">
                <div><p>Unleash Your Style</p></div>
                <div><p>FASHION FOR</p></div>
                <div><p>EVERY OCCASION</p></div>
                <div><button><h3>SHOP NOW</h3></button></div>
            </div>
            <div>
                
            </div>
            <img src={woman} alt="Carefree dark-skinned woman" />
        </div>
    );
};

export default Image;
