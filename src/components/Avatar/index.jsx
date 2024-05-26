import PropTypes from 'prop-types';
import style from './Avatar.module.scss'

const Avatar = (props) => {
  const {image} = props
  return (
    <>
      <img className={style.avatar} src={image} alt="avatar" loading='lazy' />
    </>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
}

export default Avatar;