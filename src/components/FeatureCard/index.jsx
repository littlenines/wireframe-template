import PropTypes from 'prop-types';
import IconBadge from '../IconBadge';
import style from './FeatureCard.module.scss'

const FeatureCard = (props) => {
  const {showBadge = true, showTitle = true, setClass='', title, description} = props
  return (
    <div className={`${style.feature_card} ${setClass}`}>
      {showBadge && <IconBadge image={props.iconImage}/>}
      <div>
        {showTitle && <h3 className='card_heading_typography mb-24'>{title}</h3>}
        <p className='card_text_typography barely_visible'>
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