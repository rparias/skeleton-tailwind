function CardSkeleton() {
  return <div className="max-w-md m-auto my-10 flex">
    <div className="flex flex-col bg-slate-100 py-3 px-2 rounded gap-1 animate-pulse">
      <div className="bg-slate-200 rounded w-32 h-20"/>
      <div className="flex flex-row gap-1 items-center">
        <div className="bg-slate-200 rounded-full w-8 h-8"/>
        <div className="flex flex-col gap-1">
          <div className="bg-slate-200 rounded w-16 h-3"/>
          <div className="bg-slate-200 rounded w-20 h-2"/>
        </div>
      </div>
    </div>
  </div>;
}

export default CardSkeleton;