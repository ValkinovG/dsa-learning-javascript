// data structure
const students = ['Mike', 'John', 'Ivan', 'Bobby', 'Frank'];

// algorithm
const findStudent = (allStudents, studentName) => {
    for(let i=0; i<allStudents.length; i++){
        if(studentName === allStudents[i]){
            return `${studentName} is on the students list.`
        }
    }
    return `No student with the name ${studentName}.`
}

//displaying the result
console.log(findStudent(students, 'Ivan'));