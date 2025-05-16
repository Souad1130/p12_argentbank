
import { accounts } from "../data/accounts";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfil } from "../services/fetchData";
import { editUser } from "../redux/userSlice";
import Button from "../components/Button";
import AccountCard from "../components/AccountCard";
import ErrorConnection from "../components/ErrorConnection";


/**
* Dashboard page

*/
const Dashboard = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [editName, setEditName] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const token = user.accessToken;
    const transactions = accounts;
console.log(transactions)
    /**
    * // Gère la modification du prénom et du nom de l'utilisateur.

    
    */
    const editUserName = (e) => {
        e.preventDefault();
        setEditName(!editName);
    };

    /**
    *Gère la sauvegarde des modifications du prénom et du nom de l'utilisateur.

    */
    const saveEditName = async (e) => {
        e.preventDefault();
        if (firstName !== "" && lastName !== "" && token) {
            await editProfil(token, firstName, lastName);
            dispatch(editUser({
                firstName: firstName,
                lastName: lastName,
            }));
            setEditName(false);
        }
    };

    /**
    * Gère l'annulation des modifications du prénom et du nom de l'utilisateur.
    
    */
    const cancelEditName = (e) => {
        e.preventDefault();
        if (editName) {
            setEditName(false);
        }
    };
    //on a appeller les components button, AccountCard, ErrorConnection

    return (
        <>
            {user.signin ? (
                <div className="dashboard">
                    <div className="dashboard__head">
                        {editName ? (
                            <div className="dashboard__edit">
                                <h2 className="dashboard__title">Welcome back</h2>
                                <form className="dashboard__form">
                                    <div className="dashboard__form-first">
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="dashboard__form-input"
                                            onChange={(e) => setFirstName(e.currentTarget.value)}
                                            defaultValue={user.firstName}
                                        />
                                        <Button btnStyle="btn btn--edit-form" label="Save" onClick={saveEditName} />
                                    </div>
                                    <div className="dashboard__form-last">
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="dashboard__form-input"
                                            onChange={(e) => setLastName(e.currentTarget.value)}
                                            defaultValue={user.lastName}
                                        />
                                        <Button btnStyle="btn btn--edit-form" label="Cancel" onClick={cancelEditName} />
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <>
                                <h2 className="dashboard__title">Welcome back<br />{user.firstName} {user.lastName}</h2>
                                <Button btnStyle="btn" label="Edit Name" onClick={editUserName}/>
                            </>
                        )}
                    </div>
                    { transactions.map((transaction) =>
                        <AccountCard key={transaction.id} title={transaction.title} amount={transaction.amount} desc={transaction.desc} />
                    )}
                </div>
            ) : (
                <ErrorConnection />
            )}
        </>
    );
};

export default Dashboard;