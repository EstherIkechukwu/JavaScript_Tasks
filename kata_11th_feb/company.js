const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {name: "Esther", department: "Engineering", ID: 12}, 
        { name: "Moses", department: "HR", ID: 13 }, 
        { name: "Bibi", department: "Marketing", ID: 11 },
        {name: "Ifeanyi", department: "finance", ID: 14}
    ]
}

function getSecondEmployeeName (company, id){
    return company.employees.filter((employee) => employee.ID == id).name
    //return company.employees[1].name
}

function getCompanyDetails( company){
    return `Company name: ${company.name} \nCompany location: ${company.location}` 
}

function printEmployeesDetails(company) {
    company.employees.forEach(employee => {
        console.log(`Employee name: ${employee.name} \nEmployee department: ${employee.department}`)
    });
}