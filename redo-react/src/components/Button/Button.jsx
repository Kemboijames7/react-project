import styles from './Button.module.css'
import PropTypes from 'prop-types'


 function Button ({
    className,
    children,
    whenButtonIsclicked,


}) {
 
    return(
        <button 
        onClick={ whenButtonIsclicked}
         className={`${styles.button} ${className}`}>
           {children}
        </button>
    )
}

Button.propTypes = { 
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Button