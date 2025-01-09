
import { Route, Outlet, Routes } from "react-router-dom"
import { CustomerList } from "../components/customers/CustomerList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { NavBar } from "../components/nav/NavBar"
import { TicketList } from "../components/tickets/TicketList"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => { setCurrentUser(JSON.parse(localStorage.getItem("honey_user"))) }, [])

  return <>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList user={currentUser} />} />

        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />}>
          </Route>
        </Route>

        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />}>
          </Route>
        </Route>

        <Route path="profile" element={<EmployeeForm currentUser={currentUser} />} />

      </Route>
    </Routes>
  </>
}
