async function requests(url, options) {
    const response = await fetch(url, options);
    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function loadAllStudents() {
    const students = await requests('http://localhost:3030/jsonstore/collections/students');
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = "";
    Object.values(students).map(loadStudent).forEach(student => {
        tableBody.innerHTML += student;
    });

}

function loadStudent(student) {
    const result = `
    <tr}>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>
    </tr>`;
    return result;


}

async function postNewStudent(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    let firstName = formdata.get('firstName');
    let lastName = formdata.get('lastName');
    let facultyNumber = formdata.get('facultyNumber');
    let grade = formdata.get('grade');

    const student = await requests('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade
        })
    });
    firstName = '';
    lastName = '';
    facultyNumber = '';
    grade = '';

    loadAllStudents();
}
function attachEvents() {
    loadAllStudents();
    document.getElementById('form').addEventListener('submit',postNewStudent);

}
attachEvents()