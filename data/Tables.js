var jsonUrl = "https://raw.githubusercontent.com/Richard190104/fishing/refs/heads/main/data/jsons/AboutUsTables.json";
let cont = document.querySelector(".fetchedTables");

// Add this line to set the background color of all tables and their containing divs to white
let style = document.createElement('style');
style.innerHTML = `
    .fetchedTables .watch-me{
        background-color: rgba(0, 0, 0, 0.301);
        margin: 10px;
        border-radius: 20px;
        padding: 10px;
        color: white;
    }
    .fetchedTables .watch-me h3{
        color: rgb(0, 210, 238);
    }
`;
document.head.appendChild(style);

fetch(jsonUrl)
.then(response => response.json())
.then(data => {
    Object.entries(data).forEach(entry => {
        var c = createTable(entry);
        if (c != null) cont.appendChild(c);
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
    if (entry[0] == "ParticipientsMain" || entry[0] == "ParticipientsControl"){
        if (entry[0] == "ParticipientsMain"){
            var tbl = document.querySelector(".partMain");
            if (!tbl) {
                tbl = document.createElement("table");
                tbl.classList.add("partMain");
                cont.appendChild(tbl);
            }
            let tbody = document.createElement("tbody");
            Object.entries(entry[1]).forEach(([key, value]) => {
                let row = document.createElement("tr");
                value.forEach(v => {
                    let cell = document.createElement("td");
                    cell.textContent = v;
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });
            tbl.appendChild(tbody);
        }else if(entry[0] == "ParticipientsControl"){
            var tbl = document.querySelector(".partCont");
            if (!tbl) {
                tbl = document.createElement("table");
                tbl.classList.add("partControl");
                cont.appendChild(tbl);
            }
            let tbody = document.createElement("tbody");
            Object.entries(entry[1]).forEach(([key, value]) => {
                let row = document.createElement("tr");
                value.forEach(v => {
                    let cell = document.createElement("td");
                    cell.textContent = v;
                    row.appendChild(cell);
                });
                tbody.appendChild(row);
            });
            tbl.appendChild(tbody);
        }
        return null;
    }
    headder.style.borderBottom = "2px solid rgb(255, 255, 255)";

    headder.textContent = entry[0];
    div.appendChild(headder);

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    Object.entries(entry[1]).forEach(([key, value]) => {
        let row = document.createElement("tr");
        for (v of value){

            let cell2 = document.createElement("td");
            cell2.textContent = v;
            row.appendChild(cell2);
        }

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    table.classList.add("hoverTable");
    div.appendChild(table);
    div.classList.add("watch-me");
    return div;
}
