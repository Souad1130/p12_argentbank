/**
* Async function that sending a POST request to the server with email and password and if valid get token 

*/
//fonction pour c'identefier pour recuperer le token
export const userSignIn = async (email, password) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        const token = data.body.token;
        return token;
    } catch (error) {
        console.error(error);
    }
};

/**
* // Fonction asynchrone qui récupère le profil de l'utilisateur avec une requête POST vers le serveur,
//  en utilisant le token

*/
//utilise token pour recuperer les donner de l'utilisateur 
export const getProfil = async (token) => {
    const headers = { Authorization: `Bearer ${token}` };

    try {
        const responseProfile = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers,
        });
        const profile = await responseProfile.json();
        return profile.body;
    } catch (error) {
        console.error(error);
    }
};

/**
* // Fonction asynchrone qui met à jour le prénom et le nom de l'utilisateur avec une requête PUT vers le serveur,
//  en utilisant le token
*/
//pour changer le nom d'utilisateur 
export const editProfil = async (token, firstName, lastName) => {
    const config = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        })
    };

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", config);
        const profile = await response.json();
        return profile.body;
    } catch (error) {
        console.error(error);
    }
};
