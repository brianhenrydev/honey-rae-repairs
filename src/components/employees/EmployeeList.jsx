import { useState, useEffect } from "react"
import { getStaffUsers } from "../../services/UserService"
import { User } from "../user/User"
import "./Employees.css"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    getStaffUsers().then((employees) => setEmployees(employees))
  }, [])
  return (<div className="employees">
    {
      employees.map(({ fullName, email, id }) =>
        <User key={id} fullName={fullName} email={email} id={id} />
      )
    }
  </div>
  )
}
