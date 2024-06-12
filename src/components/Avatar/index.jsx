import PropTypes from 'prop-types';
import style from './Avatar.module.scss'

const Avatar = (props) => {
  const { image, setClass } = props
  return (
    <>
      <img className={`${style.avatar} ${setClass ?? ''}`} src={image} alt="avatar" loading='lazy' />
    </>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
  setClass: PropTypes.string,
}

export default Avatar;