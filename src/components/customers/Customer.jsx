import { Link } from "react-router-dom"
import { User } from "../user/User"
import "./Customer.css"

export const Customer = ({ fullName, email, id }) => (
  <div key={id} className="customer">
    <Link to={`/customers/${id}`}>
      <User fullName={fullName} email={email} id={id} />
    </Link>
  </div>)
