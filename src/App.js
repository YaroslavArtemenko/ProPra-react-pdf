import './App.css';

import generatePDF from "./services/RechnungErstellen";

function App() {
  return (
    <div className="App">
      <button
          className="btn btn-primary"
          onClick={() => generatePDF()}
      >
        Generate monthly report
      </button>
    </div>
  );
}

export default App;
