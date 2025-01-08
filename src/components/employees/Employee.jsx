import { User } from "../user/User"
import { Link } from "react-router-dom"
import "./Employee.css"


export const Employee = ({ fullName, email, id }) => (
  <div key={id} className="employee">
    <Link to={`/employees/${id}`}>
      <User fullName={fullName} email={email} id={id} />
    </Link>
  </div>
)
