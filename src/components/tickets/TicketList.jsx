import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/TicketService";
import "./Ticket.css"
import { Ticket } from "./Ticket";
import { TicketFilterBar } from "../TicketFilterBar"

export const TicketList = ({ user }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [emergencyFilter, setEmergencyFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const getAndSetTickets = () => {
    getAllTickets().then(ticketArr => {
      user.isStaff ? setAllTickets(ticketArr.reverse()) : setAllTickets(ticketArr.reverse().filter(ticket => ticket.userId === user.id))
    })
  }

  useEffect(() => {
    getAndSetTickets()
  }
    , [user])

  useEffect(() => {
    emergencyFilter ? setFilteredTickets(allTickets.filter(({ emergency }) => emergency === true))
      : setFilteredTickets(allTickets)
  }, [emergencyFilter, allTickets])

  useEffect(() => {
    setFilteredTickets(
      allTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )

  }, [searchTerm, allTickets])

  useEffect(() => {
    openFilter ? setFilteredTickets(allTickets.filter(ticket => ticket.dateCompleted === "")) :
      setFilteredTickets(allTickets)
  }, [openFilter, allTickets])

  return (
    <div className="ticket-container">
      <h2>Tickets</h2>
      <article className="tickets">
        <TicketFilterBar
          setEmergencyFilter={setEmergencyFilter}
          setOpenFilter={setOpenFilter}
          setSearchTerm={setSearchTerm}
          user={user}
        />


        {
          filteredTickets.map((ticketObj) =>
            <Ticket
              ticket={ticketObj}
              getAndSetTickets={getAndSetTickets}
              user={user}
              key={ticketObj.id} />)
        }
      </article>
    </div>)

}
