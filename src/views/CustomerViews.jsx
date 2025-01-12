import { Outlet, Routes, Route } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNav } from "../components/nav/CustomerNav"
import { TicketList } from "../components/tickets/TicketList"
import { TicketForm } from "../components/forms/TicketForm"

export const CustomerViews = ({ localStorageUser }) => {
  return (
    <Routes>
      <Route path="/" element={
        (<>
          <CustomerNav />
          <Outlet />
        </>)
      }>
        <Route index element={<Welcome />} />
        <Route path="tickets" >
          <Route index element={<TicketList user={localStorageUser} />} />
          <Route path="create" element={<TicketForm user={localStorageUser} />} />
        </Route>
      </Route>
    </Routes >)
}
