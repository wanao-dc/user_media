import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, removeUser, updateUser } from "../store";
import Button from './Button';

function UsersList() {
  const dispatch = useDispatch();
  const {isLoading,data,error } = useSelector(state=>state.users);



useEffect( ()=>{
    dispatch(fetchUsers())
    },[dispatch]

)

if (isLoading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>Error...</div>;
}


const handleDeleteUser= (user) =>{
    console.log(user.id);
    dispatch(removeUser(user.id))
  }

  const handleAddUser= (user) =>{
    dispatch(addUser())
  }

  const handleUpdateUser= (user) =>{
    dispatch(updateUser(user.id))
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer" onClick={() => handleDeleteUser(user)}>
          {user.name}
        </div>
        <Button  onClick={() => handleUpdateUser(user)}> modif user</Button>
      </div>
    );
  });


  return (
    <div>
        <div classnam="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button  onClick={handleAddUser}>+ Add user</Button>
        </div>
        {renderedUsers}
    </div>

  )




}

export default UsersList;