import Button from "./Button";


//les card de la page profile
const AccountCard = ({ title, amount, desc }) => {
    return (
        <div className="account-item">
            <div className="account-item__content">
                <h3 className="account-item__title">{title}</h3>
                <p className="account-item__amount">{amount}</p>
                <p className="account-item__desc">{desc}</p>
            </div>
            <div className="account-item__cta">
                <Button btnStyle="btn" label="View transactions" />
            </div>
        </div>
    );
};


export default AccountCard;