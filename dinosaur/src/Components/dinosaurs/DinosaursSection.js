import React from 'react'
import "./DinosaursSection.css"
export default function DinosaursSection({dinosaurs}) {
    return (
        <section className="dinosaurs">
        {
          dinosaurs.map(dinosaur => {
            return(
              <div key={dinosaur.name} className="dinosaur-card">
                <img src={dinosaur.image} alt={dinosaur.name} />
                <h2>{dinosaur.name}</h2>
              </div>
            )
          })
        }
      </section>
    )
}
