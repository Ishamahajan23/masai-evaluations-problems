class Animal{
   constructor(name){
     if(this.constructor === Animal){
        console.log("error")
     }
     this.name = name;
   }
 
   makesound(){
         console.log("error")
   }
}
class Dog extends Animal{
    makesound(){
        console.log(`${this.name} says Woof!`)
    }
}

class Cat extends Animal{
 makesound(){
        console.log(`${this.name} says Meow!`)
    }
}

const animals =  [
    new Dog("Buddy"),
    new Cat("Whiskers")
]
for(let animal of animals){
    animal.makesound();
}

