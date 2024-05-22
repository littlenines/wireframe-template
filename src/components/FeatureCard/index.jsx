import PropTypes from 'prop-types';
import style from './FeatureCard.module.scss'

const FeatureCard = (props) => {
  return (
    <div className={style.feature_cards}>   
      <div className={style.card}>
        <div className={style.icon}>
          <img src="icons/lightbulb.svg" alt="lightbulb" />
        </div>
        <div className={style.card_content}>
          <h3 className={`card_heading_typography ${style.content_title}`}>{props.title}</h3>
          <p className={`card_text_typography ${style.content_description}`}>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default FeatureCard;