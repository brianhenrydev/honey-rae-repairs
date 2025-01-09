import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getEmployeeById, updateEmployee } from "../../services/EmployeeService"
import "./Form.css"


export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getEmployeeById(currentUser.id).then(([employee]) => {
      setEmployee(employee)
    })

  }, [currentUser])


  const handleInputChange = ({ target: { value, name } }) => {
    const copy = { ...employee }
    copy[name] = value

    setEmployee(copy)
  }
  const handleSave = (event) => {
    event.preventDefault()
    updateEmployee({
      id: employee.id,
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId
    }).then(() => {
      navigate(`/employees/${currentUser.id}`)
    })
  }

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={employee.specialty ? employee.specialty : ""}
            onChange={handleInputChange}
            required
            className="form-control" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate:</label>
          <input
            type="number"
            name="rate"
            value={employee.rate ? employee.rate : 0}
            onChange={handleInputChange}
            required
            className="form-control" />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
        </div>
      </fieldset>
    </form>
  )
}
