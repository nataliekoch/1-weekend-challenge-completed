//Set up an empty array to store the object created from the text field info
//Estableing a varaible to hold the conversions from yearly salary to monthly

var employeeArray = [];
var monthlySalary;

$(document).ready(function(){
	//Listen on id of employeeInfo for a submit button being clicked (or 'enter' key being pressed)
	$("#employeeInfo").submit(function(event){
		//prevents ".submit" default behavior of refreshing the page
		event.preventDefault();

		//set an empty object for text field info to be placed
		var values = {};

		
		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeInfo").find("input[type=text]").val("");
		employeeArray.push(values);
		monthlySalaryCalc(values.employeeyearlysalary);
		appendDom(values);

		$(".outputInfo").on('click', '.deleteButton',  function(){
			$(this).parents(".outputInfo").remove();
			
		});
	});
});

function monthlySalaryCalc(salary){
	if (typeof salary !== "number") {
		monthlySalary = 0;
	}
	else {
		salary = parseInt(salary);
		monthlySalary = Math.round(salary/12);
	}
}

function appendDom(employee){
	$("#employeeContainer").append("<div class='outputInfo'>");
	var $el = $("#employeeContainer").children().last();
	
	
	$el.append(
		// "<div class = 'employeeData'>" +
			"<div> " + employee.employeename + "</div>" +
			"<div> " + employee.employeenumber + "</div>" +
			"<div> " + employee.employeejob + "</div>" +
			"<div> " + employee.employeeyearlysalary + "</div>" +
			"<div> monthly salary: " + monthlySalary + "</div>" +
			"<button class = 'deleteButton'> Remove employee </button>" 
		// "</div>"
	);
}
