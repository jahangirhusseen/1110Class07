// let ban = Number(prompt('Bangla'));
// let eng = Number(prompt('English'));
// let math = Number(prompt('Methematics'));


function Result(){
    
    // Letter Grade & Grade Points
    this.result = (marks) =>{
        let letterGrade;
        let gradePoint;
        if ( marks >= 0 && marks < 33 ) {
            letterGrade = 'F';
            gradePoint = 0;
        }else if ( marks >= 33 && marks < 40 ) {
            letterGrade = 'D';
            gradePoint = 1;
        }else if ( marks >= 40 && marks < 50 ) {
            letterGrade = 'C';
            gradePoint = 2;
        }else if ( marks >= 50 && marks < 60 ) {
            letterGrade = 'B';
            gradePoint = 3;
        }else if ( marks >= 60 && marks < 70 ) {
            letterGrade = 'A-';
            gradePoint = 3.5;
        }else if ( marks >= 70 && marks < 80 ) {
            letterGrade = 'A';
            gradePoint = 4;
        }else if ( marks >= 80 && marks <= 100) {
            letterGrade = 'A +';
            gradePoint = 5;
        }else{
            letterGrade = 'Invalid Marks';
            gradePoint = 'Invalid Marks';
        }
        return {
            grade: letterGrade,
            gpa: gradePoint
        }
    }
    this.finalResult = (ban,eng,math) => {
        let totalGrade;
        let cgpa;

        let totalGradePoint = this.result(ban).gpa + this.result(eng).gpa + this.result(math).gpa;
        cgpa = totalGradePoint / 6;

        if (ban < 33 || eng < 33 || math < 33) {
            totalGrade = 'F';
        }else if( cgpa >= 0 && cgpa < 1 ){
            totalGrade = 'F';
        }else if( cgpa >= 1 && cgpa < 2 ){
            totalGrade = 'D';
        }else if( cgpa >= 2 && cgpa < 3 ){
            totalGrade = 'C';
        }else if( cgpa >= 3 && cgpa < 3.5 ){
            totalGrade = 'B';
        }else if( cgpa >= 3.5 && cgpa < 4 ){
            totalGrade = 'A-';
        }else if( cgpa >= 4 && cgpa < 5 ){
            totalGrade = 'A';
        }else if( cgpa == 5){
            totalGrade = 'A+';
        }
        return {
            finalGrade : totalGrade,
            fianlcgpa : totalGrade == 'F' ? 'Failed' : 'CGPA : ' + cgpa.toFixed(1)
        }
    }

}

let res = new Result;


student.map((data,index) => {
 

console.log(`


Subject\t\t\t Marks\t  Grade \t\t  GPA

Bangla\t\t\t ${data.ban}\t\t\t${res.result(data.ban).grade}   \t\t\t${res.result(data.ban).gpa}
English\t\t\t ${data.eng}\t\t\t${res.result(data.eng).grade}   \t\t\t${res.result(data.eng).gpa}
Methematics\t\t ${data.math}\t\t\t${res.result(data.math).grade}   \t\t\t${res.result(data.math).gpa}
---------------------------------------------------------
\t\t\t grade: ${res.finalResult(data.ban,data.eng,data.math).finalGrade} \t  ${res.finalResult(data.ban,data.eng,data.math).fianlcgpa}
`);
});