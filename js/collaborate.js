// var employee = require('employee.json');

var calculateSalary = function (emp) {
    var totalSalary = 0;
    var level = emp.Level;
    var years = emp.Years;
    var salary = levelSalary(level);
    if (level == 1) {
        return salary;
    }
    if (years == 0) {
        return salary
    }
    var experience = experienceLevel(years);
    var experienceBonus = experienceLevelBonus(level, experience);
    totalSalary = salary + experienceBonus;

    return totalSalary;
};
//
function levelSalary(level) {
    var salary = 0;
    if (level == 1) {
        salary = 5000;
    }
    else if (level == 2) {
        salary = 50000;
    }
    else if (level == 3) {
        salary = 100000;
    }
    else if (level == 4) {
        salary = 150000;
    }
    else if (level == 5) {
        salary = 200000;
    }
    return salary;
}

function experienceLevel(years) {
    var experience = 1;
    if (years >= 9) {
        experience = 4;
    }
    else if (years >= 6) {
        experience = 3;
    }
    else if (years >= 3) {
        experience = 2;
    }
    return experience;
}

function experienceLevelBonus(level, experienceLevel) {
    var totalBonus = 0;

    if (level == 2 || level == 3) {
        totalBonus = experienceLevel * 5000;
    }
    else if (level == 4 || level == 5) {
        totalBonus = experienceLevel * 10000;
    }

    return totalBonus;
}
// module.exports = result;
// var employee = {
//     name: "John",
//     level: 3,
//     years: 0
// };


function addEmployee() {

    var salary, employee = {}, serial = {};
    var name = document.getElementById("name").value;
    var level = document.getElementById("level").value;
    var years = document.getElementById("years").value;
    var serialNo = "h" + Math.random().toString(36).substr(2, 5);

    //validation
    if (level.trim().length == 0 || (years.trim().length == 0) || (name.trim().length == 0)) {
        var s = document.getElementById("h-error");
        s.innerHTML = "All fields must be filled properly";
    }
    else {
        serial.Name = name;
        serial.Level = level;
        serial.Years = years;
        serial.Salary = calculateSalary(serial);
        if (level == 1){
            serial.Level_name = 'Intern';
        }
        else if (level == 2){
            serial.Level_name = 'Associate';
        }
        else if (level == 3){
            serial.Level_name = 'Manager';
        }
        else if (level == 4){
            serial.Level_name = 'Executive';
        }
        else if (level == 5){
            serial.Level_name = 'Director';
        }

        // alert(JSON.stringify(serial));
        //
        // localStorage['employee'] = employee;
        // localStorage.setItem("employee", JSON.stringify(employee));
        var storageEmployee = localStorage.getItem("employee");
        if (storageEmployee === null) {
            employee[serialNo]= serial;
            localStorage.setItem("employee", JSON.stringify(employee));
        }
        else{
            var stored = JSON.parse(storageEmployee);
            stored[serialNo] = serial;
            localStorage.setItem("employee", JSON.stringify(stored));
        }

        // Sets the new location of the current window.
        window.location.href = "list.html";
    }


}

function myFunction() {
    alert("hello");
}
// console.log(calculateSalary(employee));