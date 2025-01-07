export const TicketFilterBar = ({ setEmergencyFilter, setSearchTerm }) => (
  <div className="filter-bar">

    <div>
      <button className="filter-btn btn-primary" onClick={() => setEmergencyFilter(true)}> Show Emergency</button>
      <button className="filter-btn btn-secondary" onClick={() => setEmergencyFilter(false)}>Show all</button>
    </div>
    <input
      type="text"
      placeholder="Search Tickets"
      className="ticket-search"
      onChange={({ target: { value } }) => setSearchTerm(value)} />
  </div>
)
