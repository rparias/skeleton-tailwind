function Card({ username, name }: { username: string, name: string }) {
  return <div className="max-w-md m-auto my-10 flex">
    <div className="flex flex-col bg-slate-100 py-3 px-2 rounded gap-1">
      <div className="bg-blue-200 rounded w-32 h-20"/>
      <div className="flex flex-row gap-1 items-center">
        <img src="/images/user_icon.svg" alt="user icon" width={32} height={32}/>
        <div className="flex flex-col text-left">
          <p className="text-sm">{username}</p>
          <p className="text-xs">{name}</p>
        </div>
      </div>
    </div>
  </div>;
}

export default Card;