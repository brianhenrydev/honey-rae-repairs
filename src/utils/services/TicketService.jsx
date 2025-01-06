export const getAllTickets = () =>
  fetch("http://localhost:8088/serviceTickets").then(res => res.json())

