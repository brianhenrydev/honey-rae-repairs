import { getAllTickets } from "./utils/services/TicketService"
import { useEffect, useState } from "react"
import "./App.css"
export const App = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [emergencyFilter, setEmergencyFilter] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() =>
    getAllTickets().then(ticketArr => setAllTickets(ticketArr))
    , [])

  useEffect(() => {
    console.log("toggled")
    emergencyFilter ? setFilteredTickets(allTickets.filter(({ emergency }) => emergency === true))
      : setFilteredTickets(allTickets)
  }, [emergencyFilter, allTickets])

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={() => setEmergencyFilter(true)}> Show Emergency</button>
        <button className="btn-secondary" onClick={() => setEmergencyFilter(false)}>Show all</button>
      </div>
      <article className="tickets">

        {filteredTickets.map(({ id, description, emergency }) =>
        (<section className="ticket" key={id}>
          <header className="ticket-info"> Ticket #{id}</header>
          <div>{description}</div>
          <footer>
            <div>
              <div className="ticket-info">emergency:</div>
              <div>{emergency ? "yes" : "no"}</div>
            </div>
          </footer>
        </section>
        ))}
      </article>
    </div>)
}
