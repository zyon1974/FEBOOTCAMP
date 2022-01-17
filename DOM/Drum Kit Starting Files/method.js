function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
        alert("may I tale your suitcase?");
        pickUpSuitcase();
        move();
    }
}