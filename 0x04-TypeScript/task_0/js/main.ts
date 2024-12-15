interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName:"Don",
    lastName: "Bosco",
    age: 23,
    location: "Kilimani"
}
const student2: Student = {
    firstName:"Natasha",
    lastName: "Omondi",
    age: 23,
    location: "Karen"
}

let studentsList: Student[] = [student1, student2];

//Render table when DOM is Loaded
document.addEventListener('DOMContentLoaded', () => {
    //Create table element
    const table = document.createElement('table');

    //Create table header
    const headerRow = table.insertRow();
    const headerFirstName = headerRow.insertCell();
    headerFirstName.textContent = 'first name';

    const headerLocation = headerRow.insertCell();
    headerLocation.textContent = 'location';

    //Populate table with Student data
    studentsList.forEach(student => {
        const row = table.insertRow();

        const firstNameCell = row.insertCell();
        firstNameCell.textContent = student.firstName;
    });
    
    

    document.body.appendChild(table);

})