import React from "react"
import Joke from "./Joke"

function App() {
  return (
    <div>
      <Joke 
        question = "What is my goal"
        punchLine = "Young and beautiful"
      />

      <Joke
        question = "What kind of lifestyle do I want"
        punchLine = "Brave, Adventurous, passionate, always learning"
      />

      <Joke
        punchLine = "Maison Margiela, Urban Outfitters"
      />

      <Joke
        question = "what am i looking for in life"      
        punchLine = "Happiness, self elevation"
      />

      <Joke
        question = "What is my favorite food category"
        punchLine = "Sashimi, thai, chinese food"
      />

    </div>
  )
}

export default App