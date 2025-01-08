import { useParams } from "react-router-dom"
import { getCustomerById } from "../../services/CustomerService"
import { useEffect, useState } from "react"
import "./Customer.css"


export const CustomerDetails = () => {
  const { customerId } = useParams()
  const [customer, setCustomer] = useState({})

  useEffect(() => {
    getCustomerById(customerId).then(([customerObj]) => setCustomer(customerObj))
  }, [customerId])

  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email: </span>
        <div>{customer.user?.email}</div>
      </div>
      <div>
        <span className="customer-info">Address: </span>
        <div>{customer.address}</div>
      </div>
      <div>
        <span className="customer-info">Phone # </span>
        <div>{customer.phoneNumber}</div>
      </div>
    </section>)
}

