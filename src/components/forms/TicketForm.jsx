import { useState } from "react"
import { createTicket } from "../../services/TicketService"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

export const TicketForm = ({ user }) => {
  const nav = useNavigate()
  const [ticket, setTicket] = useState({
    userId: user.id,
    description: "",
    emergency: false,
    dateCompleted: ""
  }
  )
  const handleSave = (e) => {
    e.preventDefault()
    ticket.description ?
      createTicket(ticket).then(() => { nav("/tickets") })
      :
      window.alert("fill out description")
  }


  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input type="text"
            className="form-control"
            onChange={({ target: { value } }) => {
              setTicket({ ...ticket, description: value })
            }}
            placeholder="Enter Brief Description of Issue" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label> Emergency: <input onChange={({ target: { checked } }) => {
            setTicket({ ...ticket, emergency: checked })
          }} type="checkbox" /> </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info" onClick={handleSave}>Submit Ticket</button>
        </div>
      </fieldset>
    </form >)

}

TicketForm.propTypes = {
  user: PropTypes.object
}
