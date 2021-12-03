class Animal {
    constructor(name, weight) {

        this.name = name || "";
        this.weight = weight || 0;

        this.getName = function() {
            return this.name;
        };

        this.setName = function(value) {
            this.name = value;
        };

        this.getWeight = function() {
            return this.weight;
        };

        this.setWeight = function(value) {
            this.weight = value;
        };

        this.toString = function() {
            return `Name: ${this.getName()}, Weight: ${this.getWeight()}`;
        };

    }
}
objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1.toString());

objAnimal2 = new Animal("Mouse", 0.5);
console.log(objAnimal2.toString());