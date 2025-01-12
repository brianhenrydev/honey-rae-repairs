
export const getAllTickets = () =>
  fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets")
    .then(res => res.json())

export const assignTicket = (employeeTicket) =>
  fetch("http://localhost:8088/employeeTickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employeeTicket)
  }).then((res) => res.json())


export const closeTicket = (updatedTicket) =>
  fetch(`http://localhost:8088/serviceTickets/${updatedTicket.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTicket)
  }).then(res => res.json())

export const deleteTicket = (ticketId) =>
  fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
    method: "DELETE",
  }).then(res => res.json())

export const createTicket = (newTicket) =>
  fetch("http://localhost:8088/serviceTickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTicket)
  }).then(res => res.json())
