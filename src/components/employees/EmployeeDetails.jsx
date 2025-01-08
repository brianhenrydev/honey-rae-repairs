import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/EmployeeService";
import "./Employees.css"

export const EmployeeDetails = () => {
  const { employeeId } = useParams()
  const [employee, setEmployee] = useState({})

  useEffect(() => {
    getEmployeeById(employeeId).then(([employeeObj]) => setEmployee(employeeObj))
  }, [employeeId])
  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email: </span>
        <div>{employee.user?.email}</div>
      </div>
      <div>
        <span className="employee-info">Specialty: </span>
        <div>{employee.specialty}</div>
      </div>
      <div>
        <span className="employee-info">Rate: </span>
        <div>{employee.rate}</div>
      </div>
      <div>
        <span className="employee-info">
          Currently working on {employee.employeeTickets?.length} tickets
        </span>
      </div>
    </section>)
}
