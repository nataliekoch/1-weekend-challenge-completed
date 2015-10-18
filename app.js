var employeeArray = [];
var monthlySalary = 0;

$(document).ready(function(){
	$("#employeeInfo").submit(function(event){
		event.preventDefault();

		var values = {};

		console.log($("#employeeInfo").serializeArray());
		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeInfo").find("input[type=text]").val("");
		console.log(values);
		employeeArray.push(values);
		monthlySalaryCalc(values.employeeyearlysalary);
		appendDom(values);
		
	});
});

function monthlySalaryCalc(salary){
	salary = parseInt(salary);
	monthlySalary += (salary/12);

}

function appendDom(employee){
	console.log(employee);
	$("#employeeContainer").append("<div class='employee'></div>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<p>" + employee.employeename + "</p>");
	$el.append("<p>" + employee.employeenumber + "</p>");
	$el.append("<p>" + employee.employeejob + "</p>");
	$el.append("<p>" + employee.employeeyearlysalary + "</p>");
	$el.append("<p> monthly salary: " + monthlySalary + "</p>");

}
