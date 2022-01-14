function Result(){

    this.resultStacture = function(){

        let name = prompt('Your Name');
        let roll = prompt('Your Roll');

        let bn = Number(prompt('Type Bangla Mark'));
        let en = Number(prompt('Type English Mark'));
        let math = Number(prompt('Type Math Mark'));
        let s = Number(prompt('Type Social Mark'));
        let ss = Number(prompt('Type Social Sceince Mark'));
        let rel = Number(prompt('Type Religion Mark'));

        return`
        Student Name    = ${name}
        Studen Roll     = ${roll}

        Subject         Mark            GPA             Gread
        ----------      ------          ------          -------
        Bangla          ${bn}                ${this.gpa(bn)}                ${this.grade(bn)}
        English         ${en}                ${this.gpa(en)}                ${this.grade(en)}
        math            ${math}                ${this.gpa(math)}                ${this.grade(math)}
        Social          ${s}                ${this.gpa(s)}                ${this.grade(s)}
        S Sceince        ${ss}               ${this.gpa(ss)}                ${this.grade(ss)}
        Relegion        ${rel}                ${this.gpa(rel)}                ${this.grade(rel)}
        -------------------------------------------------------------
                        cgpa =   ${this.cgpa (this.gpa(bn), this.gpa(en), this.gpa(math), this.gpa(s), this.gpa(ss), this.gpa(rel) )}
        `

    };

    this.gpa = function(marks){

        let gpa;

        if(marks >= 0 && marks <= 32){
            gpa = 0;
        }else if(marks >= 33 && marks < 40 ){
            gpa = 1;
        }else if(marks >= 40 && marks < 50 ){
            gpa = 2;
        }else if(marks >= 50 && marks < 60 ){
            gpa = 3;
        }else if(marks >= 60 && marks < 70 ){
            gpa = 3.5;
        }else if(marks >= 70 && marks < 80 ){
            gpa = 4;
        }else if(marks >= 80 && marks <= 100 ){
            gpa = 5;
        }

        return gpa;


    };

    this.grade = function(marks){

        let grade;

        if(marks >= 0 && marks <= 32){
            grade = 'F';
        }else if(marks >= 33 && marks < 40 ){
            grade = 'D';
        }else if(marks >= 40 && marks < 50 ){
            grade = 'C';
        }else if(marks >= 50 && marks < 60 ){
            grade = 'B';
        }else if(marks >= 60 && marks < 70 ){
            grade = 'A-';
        }else if(marks >= 70 && marks < 80 ){
            grade = 'A-';
        }else if(marks >= 80 && marks <= 100 ){
            grade = 'A+';
        }

        return grade;
        


    };

    this.cgpa = function(bn, en, math, s, ss, rel){


        let total_gpa = (bn + en + math + s + ss + rel)

        let cgpa = total_gpa/6;

      

        if(bn == 0 || en == 0){
            return "You Are Faild"
        }else{

            return `Your Cgpa = ${cgpa.toFixed(2)} & Grade = ${this.totalGread(cgpa)}`

        }


    };

    this.totalGread = function(cgpa){


        if(cgpa >= 0 && cgpa < 1){
            return 'F'
        }else if(cgpa >= 1 && cgpa < 2){
            return 'D'
        }else if(cgpa >= 2 && cgpa < 3){
            return 'C'
        }else if(cgpa >= 3 && cgpa < 3.5){
            return 'B'
        }else if(cgpa >= 3.5 && cgpa < 4){
            return 'B'
        }else if(cgpa >= 4 && cgpa < 5){
            return 'A'
        }else if(cgpa == 5){
            return 'A+'
        }
    }


   


}

let result = new Result();
console.log(result.resultStacture())
