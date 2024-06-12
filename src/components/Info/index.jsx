// TODO: add props
import style from './Info.module.scss'
import PropTypes from 'prop-types';

const Info = (props) => {
  const { title='London, UK' } = props
  return (
    <div className={style.info} {...props}>
      {title && <h3 className={style.title}>{title}</h3>}
      <div className={style.icon_info}>
        <img src="icons/location.svg" width={24} height={24} alt="" />
        <span className="section_typography">Address</span>
      </div>
      <div className={style.icon_info}>
        <img src="icons/email.svg" width={24} height={24} alt="" />
        <span className="section_typography">E-mail Address</span>
      </div>
      <div className={style.icon_info}>
        <img src="icons/phone.svg" width={24} height={24} alt="" />
        <span className="section_typography">Phone Number</span>
      </div>
    </div>
  )
}

Info.propTypes = {
  title: PropTypes.string,
};

export default Info;