
import { useState } from 'react'
import styles  from  './App.module.css'
import PricingCard from './components/PricingCard/PricingCard.jsx'
 

function App() {
 const [showHeading, setShowHeading] =  useState(true)
 const [showPricingCards, setShowPricingCards] = useState(true)

 const updateHeading = () => {
 setShowHeading(!showHeading)
 }

 const updatePricingCards = () => {
 setShowPricingCards(!showPricingCards)
 }
  const cards =  [
    {
      label: "Start-Up",
      price: "Free",
      image: "/images/bike.png",
      imageAlt: "Moving bicycle with clouds",
      benefits: [
        "Unlimited Downloads",
        "Email Support",
        "Limited Access",
      ],
    },

    {
      label: "Pro",
      price: "49$",
      duration: "/Year",
      image: "/images/car.png",
      imageAlt: "Moving car with clouds",
      benefits: [
        "Upto 10 Users",
        "Email Support, Call Support",
        "1 Year Access",
      ],
    },
    {
      label: "Enterprise",
      price: "99$",
      image: "/images/plane.png",
      imageAlt: "Flying plane with clouds",
      benefits: [
        "Unlimited Access",
        "On demand request",
        "Lifetime Access",
      ],
    },
  ]


  return (
    <main>
      <div className={styles.bg}>
        {showHeading && ( <h1 className={styles.heading}>Choose your plan</h1>)}
     
   <p className={styles.description}>   Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla maximus leo quam,
          nec feugiat metus tincidunt id.

   </p>
       
<button onClick={updateHeading }>Heading</button>
<button onClick={updatePricingCards }>PricingCards</button> 
      </div>
      {showPricingCards && ( <div className={`${styles.prices} container`}>

{cards.map(card => {
   return (
      <PricingCard
      key= {card.label}
      card={card}
    />
   )
})}     
</div>
)}
</main>  


  )
}


export default App
