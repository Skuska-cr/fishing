
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