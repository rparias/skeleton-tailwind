import Card from "./Card";
import {getUsers} from "../getUsers";
import {ErrorBoundary} from "react-error-boundary";
import {CardSkeletonSuspense} from "./CardSkeletonSuspense";
import {ErrorFallback} from "./ErrorFallback";
import {Suspense} from "react";
import useSWR from "swr"

function Users() {

  const { data: users } = useSWR("/api/users", getUsers, { suspense: true });

  return (
    <div className="max-w-xl m-auto my-10 flex flex-wrap gap-2">
      {users?.map((user) => (
        <Card key={user.id} username={user.username} name={user.name}/>
      ))}
    </div>
  )
}

const UsersSuspense = () => {
  return (
    <ErrorBoundary fallback={<ErrorFallback/>}>
      <Suspense fallback={<CardSkeletonSuspense />}>
        <Users />
      </Suspense>
    </ErrorBoundary>
  )
}

export default UsersSuspense;
