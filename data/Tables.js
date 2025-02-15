var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/AboutUsTables.json";
let cont = document.querySelector(".fetchedTables");

fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    Object.entries(data).forEach(entry => {
        cont.appendChild(createTable(entry));
    })
    
    function observeHalfVisible(selector) {
        const elements = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.5) { // 50% visibility
                    entry.target.classList.add("appeared");
                }
            });
    }, { threshold: [0.5] });

    elements.forEach(element => observer.observe(element));
}

// Usage: Call the function with the selector of the elements you want to observe
observeHalfVisible(".watch-me");
})

function createTable(entry){
    let div = document.createElement("div");
    let headder = document.createElement("h3");
    headder.style.borderBottom = "1px solid black";
    headder.textContent = entry[0];
    div.appendChild(headder);

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    Object.entries(entry[1]).forEach(([key, value]) => {
        let row = document.createElement("tr");
        let cell2 = document.createElement("td");
        cell2.textContent = value[0];
        row.appendChild(cell2);

        let cell3 = document.createElement("td");
        cell3.textContent = value[1];
        row.appendChild(cell3);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    table.classList.add("hoverTable");
    div.appendChild(table);
    div.classList.add("watch-me");
    return div;
}


