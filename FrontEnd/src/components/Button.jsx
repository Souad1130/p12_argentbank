

/**
 * Component fonctionnement button.
 
 */
const Button = ({ btnStyle, label, onClick }) => {
    return (
        <button className={btnStyle} onClick={onClick}>{label}</button>
    );
};


export default Button;