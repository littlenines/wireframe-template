import PropTypes from 'prop-types';
import style from './IconBadge.module.scss'

const IconBadge = (props) => {
  const {image = 'icons/lightbulb.svg', setClass='',} = props

  return (
    <div className={`${style.icon} ${setClass}`} {...props}>
      <img src={image} alt="lightbulb" loading='lazy'/>
    </div>
  )
}

IconBadge.propTypes = {
  image: PropTypes.string,
  setClass: PropTypes.any
}
export default IconBadge;