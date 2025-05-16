import Layout from "./layout/Layout.jsx";
import AppRouter from "./router/AppRouter.jsx";

/**
 * // Le composant App retourne un élément JSX qui affiche le composant Layout,
 * lequel contient le composant AppRouter.

 * @component
 * @returns {JSX.Element}
 */
//appelle la composent layout et fichier router 
const App = () => {
    return (
        <div className="app">
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    );
};

export default App;

