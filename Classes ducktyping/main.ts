/**
 * Human
 */
class Human {
    name:string;
    age:number;
    
   
    constructor(name) {
        this.name=name;
        
    }
    

  
  
   
    
}

/**
 * Animal
 */
class Animal {
    
    name : string;
    age:number;
    
    
    constructor(name) {
        this.name=name;      
        
    }
    
    eat()
    {
        console.log(this.name + "is an animal and is eating");
        
    }
  
    

    
}


let h=new Human("fahad");
let a=new Animal("Cat");

let a1:Animal={name:"dog" ,age:23 , eat:function(){console.log("this is animal");
}};









































