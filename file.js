function getInputValue(){
    var inputEng = document.querySelector(".inputEng");
    var inputPhy = document.querySelector(".inputPhy");
    var inputChe = document.querySelector(".inputChe");
    var inputMat = document.querySelector(".inputMat");
    var studentTotal = document.querySelector('#total-marks')
    var percentage = document.querySelector('#percentage')
    var grade = document.querySelector('#grade')

    console.log(inputEng.value)
    console.log(inputPhy.value)
    console.log(inputChe.value)
    console.log(inputMat.value)

    var totalMarks = 400;
    var obtainedMarks = +inputEng.value + +inputPhy.value + +inputChe.value + +inputMat.value;
    console.log('obtained marks ===>', obtainedMarks);
    studentTotal.innerHTML = obtainedMarks;

    var studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;

        
    if(studentPercentage > 80){
        grade.innerHTML = 'A+'
    }
    else if(studentPercentage > 70){
        grade.innerHTML = 'A'
    }
    else if(studentPercentage > 60){
        grade.innerHTML = 'B'
    }
    else if(studentPercentage > 50){
        grade.innerHTML = 'C'
    }
    else if(studentPercentage > 40){
        grade.innerHTML = 'D'
    }
    else{
        grade.innerHTML = 'FAIL'
    }

}