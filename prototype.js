const proto = {
    message: function () {
        return `hello, I am learning` ;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

let anshul = Object.create(proto);
anshul.name = "Anshul";
anshul.age = 23;
console.log(anshul);
anshul.changeName("Ansh")
console.log(anshul)
