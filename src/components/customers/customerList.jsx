
import { useEffect, useState } from "react"
import { getRegularUsers } from "../../services/UserService"
import { Customer } from "./Customer"


export const CustomerList = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getRegularUsers().then((customers) => setCustomers(customers))
  }, [])

  return (
    <div className="customers">
      {customers.map(({ fullName, email, id }) => (
        <Customer key={id} fullName={fullName} email={email} id={id} />
      ))
      }
    </div>

  )
}


