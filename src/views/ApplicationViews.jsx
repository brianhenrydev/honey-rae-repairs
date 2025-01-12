
import { useEffect, useState } from "react"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => { setCurrentUser(JSON.parse(localStorage.getItem("honey_user"))) }, [])
  return currentUser.isStaff ?
    <EmployeeViews currentUser={currentUser} />
    :
    <CustomerViews localStorageUser={currentUser} />

}
