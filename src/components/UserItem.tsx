import React, { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => (
  <div key={user.id} style={{ padding: 15, border: "1px solid gray" }}>
    {user.id}. {user.name} living in {user.address.city} on street {user.address.street}
  </div>
)
export default UserItem
