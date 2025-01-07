import { useEffect, useState } from "react"
import { getRegularUsers } from "../../services/UserService"
import { User } from "../user/User"

export const CustomerList = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getRegularUsers().then((customers) => setCustomers(customers))
  }, [])

  return (
    <div className="customers">
      {customers.map(({ fullName, email, id }) => <User key={id} fullName={fullName} email={email} id={id} />)
      }
    </div>

  )
}




