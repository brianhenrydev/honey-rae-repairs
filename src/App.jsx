import "./App.css"
import { CustomerList } from "./components/customers/customerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { TicketList } from "./components/tickets/TicketList"

export const App = () => (
  <>
    <TicketList />
    <CustomerList />
    <EmployeeList />

  </>
)

