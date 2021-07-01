import './App.css';

import generateRechnung from "./services/RechnungErstellen";
import generateHonorar from "./services/HonorarbescheinigungErstellen";
import generateJahr from "./services/JahresbescheinigungErstellen";

function App() {
    return (
        <div className="App">
            <button
                className="btn btn-primary"
                onClick={() => generateRechnung()}
            >
                Generate Rechnungsbescheinigung
            </button>

            <button
                className="btn btn-primary"
                onClick={() => generateHonorar()}
            >
                Generate Honorarbescheinigung
            </button>

            <button
                className="btn btn-primary"
                onClick={() => generateJahr()}
            >
                Generate Jahresbescheinigung
            </button>
        </div>
    );
}

export default App;
