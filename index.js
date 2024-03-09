const person = {
    firstName = "Jhon";
    lastName = "Doe";
    id = 38758;
    fullName = function(){
        return this.firstName + " " + this.lastName;
    },
    getFullname(){
        return this.fullName();
    }
};


console.log(person.getFullname());