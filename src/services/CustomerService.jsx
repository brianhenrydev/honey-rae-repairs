
export const getCustomerById = (userId) =>
  fetch(`http://localhost:8088/customers?userId=${userId}&_expand=user`)
    .then(res => res.json())
