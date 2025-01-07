export const getAllEmployees = () =>
  fetch("http://localhost:8088/employees?_expand=user")
    .then(res => res.json())

export const getEmployeeById = (employeeId) =>
  fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`)
    .then(res => res.json())
