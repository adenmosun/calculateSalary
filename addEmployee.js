function addEmployee(){
	var salary, employee = {}, serial = {};
	var name = document.getElementById("name").value;
	var level = document.getElementById("level").value
	var years = document.getElementById("years").value
	var serialNo = Math.floor((Math.random() * 1000) + 1);

	serial['Name'] = name;
	serial['Level'] = level;
	serial['Years'] = years;
	// serial['salary'] = '';
	employee[serialNo]= serial;
	serial['Salary'] = calculateSalary(serial);
	if (level === 1){
		serial['Level'] = 'Intern';
	}
	else if (level === 2){
		serial['Level'] = 'Associate';	
	}
	else if (level === 3){
		serial['Level'] = 'Manager';	
	}
	else if (level === 4){
		serial['Level'] = 'Executive';	
	}
	else if (level === 5){
		serial['Level'] = 'Director';	
	}
	
	employee[serialNo]= serial;


	localStorage['employee'] = employee;
}