import "./User.css"
export const User = ({ fullName, email }) => (
  <div className="user">
    <div>
      <div className="user-info">Name:</div>
      <div>{fullName}</div>
    </div>
    <div>
      <div className="user-info">Email:</div>
      <div>{email}</div>
    </div>
  </div>

)





