import PropTypes from 'prop-types';
import IconBadge from '../IconBadge';
import style from './FeatureCard.module.scss'

const FeatureCard = (props) => {
  const {showBadge = true, showTitle = true, setClass='', title, description} = props
  return (
    <div className={`${style.card} ${setClass}`}>
      {showBadge && <IconBadge image={props.iconImage}/>}
      <div className={style.card_content}>
        {showTitle && <h3 className={`card_heading_typography ${style.card_title}`}>{title}</h3>}
        <p className={`card_text_typography ${style.card_description}`}>
          {description}
        </p>
      </div>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconImage: PropTypes.string,
  setClass: PropTypes.any,
  showBadge: PropTypes.bool,
  showTitle: PropTypes.bool,
};

export default FeatureCard;