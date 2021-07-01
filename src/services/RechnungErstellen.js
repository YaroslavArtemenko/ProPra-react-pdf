import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

// Date Fns is used to format the dates we receive
// from our API call


// define a generatePDF function that accepts a tickets argument
const generatePDF = tickets => {

    const rechnungsNummer = "202106KLRO"
    const empfaenger = "Klaus Rotthoff"
    const tutor = "Pascal Reuter"
    const gesamtBetrag = 0

    const NewDate = moment().format('DD.MM.YYYY')
     // initialize jsPDF
    const doc = new jsPDF();

    // define the columns we want and their titles
    const tableColumn = ["Id", "Leistung", "Datum", "Einzehlpreis", "Anzahl h", "Gesamtpreis"];
    // define an empty array of rows
    const tableRows = [
        ["1", "Nachhilfestunde Mathe", "6.7.2021", "35.0 EUR", "2.0", "50.0 EUR"],
        ["2", "Nachhilfestunde Mathe", "2.18.2021", "25.0 EUR", "2.0", "150.0 EUR"]
    ];

    // startY is basically margin-top
    doc.autoTable({theme: "grid"})
    doc.autoTable(tableColumn, tableRows, { startY: 60, theme: 'grid'});
    let finalY = doc.lastAutoTable.finalY;
    // const date = Date().split(" ");
    // ticket title. and margin-top + margin-left
    doc.setFontSize(20)
    doc.setFont("Arial")
    doc.text("Rechnung", 14, 15);

    doc.setFontSize(12)
    doc.text(`Rechnung Nr. ${rechnungsNummer}`, 14, 30)

    doc.text(`Empfaenger: ${empfaenger}`, 90, 30)

    doc.text(`Tutor: ${tutor}`, 90, 36)

    doc.setFontSize(12)
    doc.text(`${NewDate}`, 170, 30)

    doc.setFontSize(9)
    doc.setFont("Arial", "italic")
    doc.text("Bitte eine Zahlungen und Schriftverkehr angeben!", 14,33)

    doc.setFontSize(12)
    doc.setFont("Arial", "bold")
    doc.text(`Gesamtbetrag:      ${gesamtBetrag}`, 130, finalY+10)
    // we define the name of our PDF file.
    doc.save(`${rechnungsNummer}_Rechnung.pdf`);
};

export default generatePDF;