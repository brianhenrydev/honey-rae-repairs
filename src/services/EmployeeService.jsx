export const getAllEmployees = () =>
  fetch("http://localhost:8088/employees?_expand=user")
    .then(res => res.json())
//http://localhost:8088/employees?_expand=user&_embed=employeeTickets
export const getEmployeeById = (employeeId) =>
  fetch(`http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`)
    .then(res => res.json())
