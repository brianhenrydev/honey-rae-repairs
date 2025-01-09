export const getAllEmployees = () =>
  fetch("http://localhost:8088/employees?_expand=user")
    .then(res => res.json())

export const getEmployeeById = (employeeId) =>
  fetch(`http://localhost:8088/employees?userId=${employeeId}&_expand=user&_embed=employeeTickets`)
    .then(res => res.json())


export const updateEmployee = (employee) =>
  fetch(`http://localhost:8088/employees/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee)
  }).then(res => res.json())
