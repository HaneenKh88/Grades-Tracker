'use strict'

function Student(name,course)
{
    this.name = name;
    this.course = course;
    this.grade = GenrateGrade();
    AllStudents.push(this);
}

Student.prototype.Render = function()
{
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = this.grade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = this.course;
    tr.appendChild(td);


    table.appendChild(tr);
    div.appendChild(table);
}


var AllStudents = [];



var form = document.getElementById('form');
form.addEventListener('submit' , addstudent);

function addstudent (event)
{
    event.preventDefault();
    var SName = event.target.SName.value;
    var Course = event.target.Course.value;

    var NewStudent = new Student(SName ,Course);
   // NewStudent.Render();

    TableBody();

    localStorage.setItem('Student' , JSON.stringify(AllStudents));
}


function GenrateGrade()
{
   return Math.floor(Math.random() * (100 - 0) + 0);
}


if(localStorage.getItem('Student'))
{
    var Convert = [];
    for (var i = 0; i < Convert.length; i++) {
       
         new Student(AllStudents[i].name , AllStudents[i].course);
        TableBody();
    }
   
}


var div = document.getElementById('div');
var table =  document.createElement('table');


function TableHeader()
{
    var tr = document.createElement('tr');

    var th = document.createElement('th');
    th.textContent = 'Student Name';
    tr.appendChild(th);

    th = document.createElement('th');
    th.textContent = 'Student Grade';
    tr.appendChild(th);

    th = document.createElement('th');
    th.textContent = 'Course';
    tr.appendChild(th);

    table.appendChild(tr);
    div.appendChild(table);

}


function TableBody()
{
    table.textContent = '';
    TableHeader();

    for (var i = 0; i < AllStudents.length; i++) {
        AllStudents[i].Render();
    }


}
