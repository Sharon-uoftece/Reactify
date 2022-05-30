import React from "react"
import ContactCard from "./ContactCard"

function App() {
  return(
    <div className="contacts">
      <ContactCard 
        name="Tuntun"
        imgUrl="https://tse4.mm.bing.net/th?id=OIP.jhOezX7rkA2bKi-BO6PSXQHaD5&pid=Api&P=0&w=330&h=173/"
        phone="(100) 432-3456"
      />
     <ContactCard 
        name="Sharon"
        imgUrl="https://tse4.mm.bing.net/th?id=OIP.jhOezX7rkA2bKi-BO6PSXQHaD5&pid=Api&P=0&w=330&h=173/"
        phone="(437) 999-3659"
      />
      <ContactCard 
        name="Jackson"
        imgUrl="https://tse4.mm.bing.net/th?id=OIP.jhOezX7rkA2bKi-BO6PSXQHaD5&pid=Api&P=0&w=330&h=173/"
        phone="(647) 861-6876"
      />
    </div>
    
  )
}

export default App