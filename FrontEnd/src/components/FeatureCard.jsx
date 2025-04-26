import { useEffect, useState } from "react";
import chatIcon from "../assets/icons/icon-chat.png";
import moneyIcon from "../assets/icons/icon-money.png";
import securityIcon from "../assets/icons/icon-security.png";


/**
 * Component displaying Feature Card
 
 */
const FeatureCard = ({ id, title, txt }) => {
    const [iconCard, setIconCard] = useState(null);

    useEffect(() =>{
        const getCardIcon = () => {
            switch (id) {
            case 0:
                setIconCard(chatIcon);
                break;
            case 1:
                setIconCard(moneyIcon);
                break;
            case 2:
                setIconCard(securityIcon);
                break;
            default:
                setIconCard(null);
                break;
            }
        };
        getCardIcon();
    }, [id]);

    return (
        <div className="feature-item">
            <img src={iconCard} alt="Chat Icon" className="feature-item__icon" />
            <h3 className="feature-item__title">{title}</h3>
            <p className="feature-item__txt">{txt}</p>
        </div>
    );
};



export default FeatureCard;