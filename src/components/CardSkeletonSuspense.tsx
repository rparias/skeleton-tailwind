import CardSkeleton from "./CardSkeleton";

export const CardSkeletonSuspense = () => {
  return (
    <div className="max-w-xl m-auto my-10 flex flex-wrap gap-2">
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </div>
  )
}