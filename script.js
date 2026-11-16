// ==========================================
// UPPGIFT 4 – Skapa variabler (Hämta element)
// ==========================================

// Variabel 1: Checkboxen (Hämtas via dess ID)
const checkbox = document.getElementById("divStyle");

// Variabel 2: Alla textfält (Hämtas via deras klassnamn). 
// Detta skapar en samling (HTMLCollection) av element.
const textfields = document.getElementsByClassName("textfield");

// Variabel 3: Knappen (Hämtas via querySelector, riktar in sig på ID)
const button = document.querySelector("#removeBtn");

// Variabel 4: Div-elementet (Hämtas via dess ID)
const myDiv = document.getElementById("myDiv");


// ==========================================
// UPPGIFT 5 – Skapa en fördefinierad funktion
// ==========================================

function handleTextFieldInput(e) {
    // Skriver ut avsändaren (target) till konsolen
    console.log(e.target);

    // Tar reda på id-attributet för inputfältet som triggade eventet
    let targetId = e.target.id;

    // Om id är "content", skriv ut fältets värde till div-elementet
    if (targetId === "content") {
        myDiv.innerHTML = e.target.value;
    }
}


// ==========================================
// UPPGIFT 6 – Koppla eventlyssnare
// ==========================================

// 1. Eventlyssnare till checkboxen
checkbox.addEventListener("change", function() {
    // Hämtar färgen som är inskriven i första textfältet (som har id "color").
    // Eftersom textfields är en samling ligger den på plats 0.
    let colorInput = textfields[0].value;
    
    // Ändrar bakgrundsfärgen på diven till det som skrevs in
    myDiv.style.backgroundColor = colorInput;
});

// 2. Eventlyssnare till textfälten
// Eftersom vi hämtade dem via classname (variabel 2) måste vi loopa igenom dem.
for (let i = 0; i < textfields.length; i++) {
    // Vi använder "input" som event, då uppdateras diven direkt när man skriver
    textfields[i].addEventListener("input", handleTextFieldInput);
}

// 3. Eventlyssnare till knappen
button.addEventListener("click", function() {
    // Tar bort hela div-elementet från DOM-trädet
    myDiv.remove();
});