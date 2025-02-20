

function createPDF(data, year) {

    window.jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF();
    let y = 20; // Initial vertical position

    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "normal");
    doc.text("MO SRZ MEDZILABORCE", 75, y);
    y += 10;
    doc.setFontSize(16);
    doc.text("zarybnenie " + year, 85, y);
    y += 10;

    // Iterate through the object and generate tables
    Object.values(data).forEach((revir) => {
        y += 10;
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(revir.name, 12, y);
        y += 5;

        let tableData = [];
        Object.keys(revir).forEach((key) => {
            if (key !== "name") {
                tableData.push([key, revir[key][0] + " ks", revir[key][1] + " €"]);
            }
        });

        doc.autoTable({
            startY: y,
            head: [["Druh", "Počet", "Cena"]],
            body: tableData,
            theme: "grid",
            styles: { fontSize: 9, halign: "left", font: "helvetica" },
            headStyles: { fillColor: [200, 200, 200] },
        });

        y = doc.lastAutoTable.finalY + 10;
    });

    doc.save( year + ".pdf");
}


function createPdfItem(yearData,year) {
    // Create the main div
    const div = document.createElement('div');
    div.className = 'zau-pdf-item';

    // Create the span for the year
    const span = document.createElement('span');
    span.textContent = year;
    div.appendChild(span);

    // Create the div for the PDF icon
    const iconDiv = document.createElement('div');
    iconDiv.className = 'zau-pdf-icon';

    // Create the img for the PDF icon
    const img = document.createElement('img');
    img.src = 'data/images/pdfLogo.png';
    img.alt = 'PDF';
    iconDiv.appendChild(img);

    // Append the icon div to the main div
    div.appendChild(iconDiv);
    div.addEventListener('click', () => {
        createPDF(yearData, year);
    });
    return div;
}

var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/pdfs.json";


fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    
    Object.keys(data.z).forEach(year => {
        const pdfItem = createPdfItem(data.z[year],year);
        
        document.querySelectorAll(".zau-box-content")[0].appendChild(pdfItem);
    });
    Object.keys(data.u).forEach(year => {
        const pdfItem = createPdfItem(data.u[year],year);
        
        document.querySelectorAll(".zau-box-content")[1].appendChild(pdfItem);
    });

});