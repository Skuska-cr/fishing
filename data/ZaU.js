function createPdfItem(year) {
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

    return div;
}

var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/AboutUsTables.json";


fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    

});