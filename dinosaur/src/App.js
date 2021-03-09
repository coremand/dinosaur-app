import { useState} from "react"
import DinosaursSection from "./Components/dinosaurs/DinosaursSection"
import './App.css';

function App() {

  const [dinosaurs, setDinosaurs] = useState([
   { name: "Littlefoot",
    image: "https://static.wikia.nocookie.net/dino/images/f/fe/LBT_HeroImage_v1.png"
   },

   {
     name:"Spike",
     image: "https://static.wikia.nocookie.net/scratchpad-iii/images/e/e7/Spike_land_before_time.jpg"
   },
   {
     name:"Cera",
     image: "https://cdn140.picsart.com/278283780003201.png"
   }
   ])
  return (
    <div className="App">
       <DinosaursSection dinosaurs={dinosaurs} />
    </div>
  );
}

export default App;
