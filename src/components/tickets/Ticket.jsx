import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/EmployeeService"
import { assignTicket, closeTicket, deleteTicket } from "../../services/TicketService"

export const Ticket = ({ ticket, user, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([])
  const [assignedEmployee, setAssignedEmployee] = useState({})

  useEffect(() => {
    getAllEmployees()
      .then(employees => {
        setEmployees(employees)
      })
  }, [])


  useEffect(() => {
    const found = employees.find(({ id }) => id === ticket.employeeTickets[0]?.employeeId)
    setAssignedEmployee(found)
  }, [employees, ticket])

  const handleClaim = () =>
    assignTicket({
      employeeId: employees.find(({ userId }) => userId === user.id).id,
      serviceTicketId: ticket.id
    }).then(() => getAndSetTickets())


  const handleClose = () => {
    closeTicket({
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date()
    }).then(() => getAndSetTickets())

  }

  const handleDelete = () => {
    deleteTicket(ticket.id).then(() => {
      getAndSetTickets()
    })
  }



  return (
    <section className="ticket" >
      <header className="ticket-info"> Ticket #{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
        </div>
        <div>
          <div className="ticket-info">emergency:</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {user.isStaff && !assignedEmployee ?
            <button onClick={handleClaim} className="btn btn-secondary">Claim</button> : ""}
          {!user.isStaff && ticket.dateCompleted === "" ? (<button className="btn-warning" onClick={handleDelete}>Delete</button>) : ("")}

          {assignedEmployee?.userId === user.id && !ticket.dateCompleted ?
            <button onClick={handleClose} className="btn btn-warning">Close</button> : ticket.dateCompleted}
        </div>
      </footer>
    </section >
  )
}

