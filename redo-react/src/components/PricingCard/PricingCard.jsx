 import styles from './PricingCard.module.css'
 import  Button  from '../Button/Button.jsx'  
 import PropTypes from 'prop-types'

 function PricingCard({ card }) {
  const themeClasses = {
    "Start-Up": styles["card--startup"],
    Pro: styles["card--pro"],
    Enterprise: styles["card--enterprise"],
  }

  const {
    label,
    price,
    duration,
    image,
    imageAlt,
    benefits,
  } = card
 
    const themeClass = themeClasses[label]
    return (
      
      <div className={`${styles.card} ${themeClass}` }> 
      <div className={`${styles.card_wrapper} center-vertical`}>
        <span className={styles.card_label}> {label}</span>
     <div className={styles.card_image}> <img src={image} alt={imageAlt} /></div>
     <div className={styles["card_price-label"]}>
      <span className={styles["card_price-figure"]}>{price}</span>
      {duration &&  (
         <span className={styles["card_price-duration"]}>{duration}</span>
      )}
     
      
       </div> 
     <span className={styles["card_benefits-label"]}> Everything in Free, Plus</span>
     <ul className={styles.card_benefits}>
 {
 benefits.map(benefit => {
return (
  <li 
key={benefit}
  className={`${styles.card_benefit} center-horizontal`}>
  <img
   src='/icons/checkbox-circle-line.png' 
   alt=''
    className={styles["card_benefit-icon"]} 
     />
   {benefit}
  </li>
)
 })}
   
     </ul>
   <Button 
   whenButtonIsclicked= {  () => {
    alert(card.label)
   }}
   className={styles.card_button }>
    Choose
   </Button>
      </div>
       
      </div>
    )
  }

  PricingCard.propTypes = {
    card: PropTypes.exact({
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
     benefits: PropTypes.arrayOf(PropTypes.string)
     .isRequired,
    }).isRequired,
  }

  export default PricingCard