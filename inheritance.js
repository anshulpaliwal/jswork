class Student {
    constructor(givenName, givenBranch, givenSection) {
        this.name = givenName;
        this.branch = givenBranch;
        this.section = givenSection;
    }

    message(){
        return `I am ${this.name}`;
    }
}


class Player extends Student{
    constructor(givenName, givenBranch, givenSection, game, age){
        super(givenName, givenBranch, givenSection);
        this.game = game;
        this.age = age;
    }
    DOB(){
        return 2020-this.age;
    }

}


var anshul= new Player("Anshul","CS","A","football", 23)
console.log(anshul)
console.log(anshul.message())
console.log(anshul.DOB())
