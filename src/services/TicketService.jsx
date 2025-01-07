export const getAllTickets = () =>
  fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets")
    .then(res => res.json())



