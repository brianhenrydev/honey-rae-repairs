import { useNavigate } from "react-router-dom"

export const TicketFilterBar = ({ setEmergencyFilter, setSearchTerm, user, setOpenFilter }) => {
  const nav = useNavigate()
  return (
    <div className="filter-bar">
      {user.isStaff ?
        <div>
          <button className="filter-btn btn-primary" onClick={() => setEmergencyFilter(true)}> Show Emergency</button>
          <button className="filter-btn btn-secondary" onClick={() => setEmergencyFilter(false)}>Show all</button>
        </div>
        :
        <>
          <button className="filter-btn btn-primary" onClick={() => { nav("/tickets/create") }}>Create Ticket</button>
          <button className="filter-btn btn-info" onClick={() => { setOpenFilter(true) }}>Open Tickets</button>
          <button className="filter-btn btn-secondary" onClick={() => { setOpenFilter(false) }}>All My Tickets</button>
        </>
      }
      <input
        type="text"
        placeholder="Search Tickets"
        className="ticket-search"
        onChange={({ target: { value } }) => setSearchTerm(value)} />
    </div>
  )
}
