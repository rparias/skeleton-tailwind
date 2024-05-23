import './App.css'
import CardSkeleton from "./components/CardSkeleton";
import Card from "./components/Card";
import { getUsers } from "./getUsers";
import useSWR from "swr"

function App() {

  const { data: users, error, isLoading } = useSWR("/api/users", getUsers);

  if (isLoading) return (
    <div className="max-w-xl m-auto my-10 flex gap-2">
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </div>
  )

  if (error) return (
    <div className="max-w-xl m-auto my-10">
      <p>Error fetching users</p>
    </div>
  )

  return (
    <div className="max-w-xl m-auto my-10 flex flex-wrap gap-2">
      {users?.map((user) => (
        <Card key={user.id} username={user.username} name={user.name}/>
      ))}
    </div>
  )
}

export default App
