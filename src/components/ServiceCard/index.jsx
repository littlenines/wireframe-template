import PropTypes from 'prop-types';
import style from './ServiceCard.module.scss'

const ServiceCard = (props) => {
  const {title, description, linkTitle='Learn More', link} = props

  return (
    <div className={style.service_card}>
      {title && <h3 className={`${style.service_card_title} card_heading_typography`}>{title}</h3>}
      {description && <p className={`${style.service_card_description} card_text_typography barely_visible`}>{description}</p>}
      {link && <a href={link} className={`${style.service_card_link} anchor_typography`}>{linkTitle}</a>}
    </div>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkTitle: PropTypes.string,
  link: PropTypes.string,
};

export default ServiceCard;