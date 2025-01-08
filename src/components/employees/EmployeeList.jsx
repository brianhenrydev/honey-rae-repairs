import { useState, useEffect } from "react"
import { getStaffUsers } from "../../services/UserService"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    getStaffUsers().then((employees) => setEmployees(employees))
  }, [])
  return (<div className="employees">
    {
      employees.map(({ fullName, email, id }) =>
        <Employee key={id} fullName={fullName} email={email} id={id} />
      )
    }
  </div>
  )
}
