import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/TicketService";
import "./Ticket.css"
import { Ticket } from "./Ticket";
import { TicketFilterBar } from "../TicketFilterBar"

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([])
  const [emergencyFilter, setEmergencyFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getAllTickets().then(ticketArr => setAllTickets(ticketArr))
  }
    , [])

  useEffect(() => {
    emergencyFilter ? setFilteredTickets(allTickets.filter(({ emergency }) => emergency === true))
      : setFilteredTickets(allTickets)
  }, [emergencyFilter, allTickets])

  useEffect(() => {
    setFilteredTickets(
      allTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )

  }, [searchTerm, allTickets])

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      <article className="tickets">
        <TicketFilterBar
          setEmergencyFilter={setEmergencyFilter}
          setSearchTerm={setSearchTerm}
        />

        {
          filteredTickets.map((ticketObj) => <Ticket ticket={ticketObj} key={ticketObj.id} />)
        }
      </article>
    </div>)

}
