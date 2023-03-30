//  {#4a3,4}
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Main />
            <Footer copyright="PPQIT Al-Mahir" desk="Copyright All right reserved" />
        </div>
    );
}

export default App;
