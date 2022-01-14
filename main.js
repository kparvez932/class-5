function Main(){


    // ( 1st Number Assingment ) = Create a function that will return children, teenagers, young people, old people from the age 

    this.peopleAge = function(){
        
        let name = prompt('Please Enter Your Name');
        let ages = Number(prompt('Please Type Your Age'));

        if(ages >= 0 && ages <= 11){
            return`Hi ${name} You Are ${ages} Years Old And You Are A Children`;
        }else if(ages >= 12 && ages <= 18){
            return`Hi ${name} You Are ${ages} Years Old And You Are A Teenagers`;
        }else if(ages >= 19 && ages <= 35){
            return`Hi ${name} You Are ${ages} Years Old And You Are A Young`;
        }else if(ages >= 36 && ages <= 55){
            return`Hi ${name} You Are ${ages} Years Old And You Are A Old OF Middle`;
        }else if(ages >= 56 && ages <= 70){
            return`Hi ${name} You Are ${ages} Years Old And You Are A Old`;
        }else if(ages >= 71 && ages <= 100){
            return`Hi ${name} You Are ${ages} Years Old And You Are A Khun Khuna Old`;
        }else{
            return`Hi ${name} You Are ${ages} Years Old And You Are A Jin`;
        }
    };



    //( 2nd Number Assingment )  = Create a function that will return the area of a rectangle, square, triangle 

    this.areaFunction = function (){

        let type = prompt('Enter Area Type');
        let length = Number(prompt('Enter Area Length'));
        let width = Number(prompt('Enter Area Width'));

        if(type == 'rectangle' || type == 'Rectangle'){
            return length * width
        }else if(type == 'square' || type == 'Square'){
            return length * length
        }else if(type == 'triangle' || type == 'Triangle'){
            return .5 * length * width
        }

    };

 


    // ( 3rd Number Assingment ) = Create an age calculator function 

    this.ageCalculator = function(){

        let name = prompt('Enter Your Name');
        let years = Number(prompt('Enter Your Birth Year'));
        let complete_age = `${ 2022 - years}`


        if(complete_age >= 0 && complete_age <= 11){
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Children`;
        }else if(complete_age >= 12 && complete_age <= 18){
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Teenagers`;
        }else if(complete_age >= 19 && complete_age <= 35){
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Young`;
        }else if(complete_age >= 36 && complete_age <= 55){
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Old OF Middle`;
        }else if(complete_age >= 56 && complete_age <= 70){
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Old`;
        }else if(complete_age >= 71 && complete_age <= 100){
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Khun Khuna Old`;
        }else{
            return`Hi ${name} You Are ${complete_age} Years Old And You Are A Jin`;
        }



    };




    // ( 4th Number Assingment ) = currency converter function from taka to USD, CAD, POUND, EURO etc 

    this.currency = function(){

        let type = prompt('Enter Currency Type');
        let amount = Number(prompt('Enter Amount'));

        if(type == 'USD' || type == 'Dollar' || type == 'dollar' || type == 'DOLLAR'){
            return`${amount} DOLLAR = ${amount * 80}/- Taka (BDT).` 
        }else if(type == 'CAD' || type == 'cad' || type == 'Cad'){
            return`${amount} CAD = ${amount * 67.64}/- Taka (BDT).` 
        }else if(type == 'POUND' || type == 'Pound' || type == 'pound'){
            return`${amount} POUND = ${amount * 116.2}/- Taka (BDT).` 
        }else if(type == 'EURO' || type == 'Euro' || type == 'euro'){
            return`${amount} EURO = ${amount * 97.15}/- Taka (BDT).` 
        }else{
            return`Please Type Currectly`
        }


    }

}

let main = new Main();

console.log(main.peopleAge());
console.log(main.areaFunction());
console.log(main.ageCalculator());
console.log(main.currency());