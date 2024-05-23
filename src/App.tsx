import './App.css'
import CardSkeleton from "./components/CardSkeleton";
import Card from "./components/Card";

function App() {

  return (
    <div>
      <div className="max-w-md m-auto my-10 flex gap-2">
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
      <div className="max-w-md m-auto my-10 flex gap-2">
        <Card username="rparias" name="Ronald Arias"/>
        <Card username="rparias" name="Ronald Arias"/>
        <Card username="rparias" name="Ronald Arias"/>
      </div>
    </div>
  )
}

export default App
