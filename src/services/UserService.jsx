export const getRegularUsers = () =>
  fetch("http://localhost:8088/users?isStaff=false")
    .then(res => res.json())


export const getStaffUsers = () =>
  fetch("http://localhost:8088/users?isStaff=true")
    .then(res => res.json())

export const getUserByEmail = (email) =>
  fetch(`http://localhost:8088/users?email=${email}`).then((res) => res.json());

export const createUser = (customer) =>
  fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
