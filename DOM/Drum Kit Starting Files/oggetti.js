var cameriera = {
    anniDiServizio: 12,
    nome: "jane",
    siOccupaDi: ["bathroom", "lobby", "bedroom"]
}

// funzione oggetto
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}


// inizializzo oggetto
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
