
export const getCustomerById = (userId) =>
  fetch(`http://localhost:8088/customers?userId=${userId}&_expand=user`)
    .then(res => res.json())

export const getCustomerTickets = (userId) =>
  fetch(`http://localhost:8088/serviceTickets?userId=${userId}`)
    .then(res => res.json())

