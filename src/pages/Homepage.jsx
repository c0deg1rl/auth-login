import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Priceing from "../components/Priceing";


export default function Homepage() {
  return (
    <div className="w-full">
        <Hero/>
        <Priceing/>
        <Featured/>
    </div>
  )
}
