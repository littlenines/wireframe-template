import PropTypes from 'prop-types';
import style from './ContentCard.module.scss';

const ContentCard = (props) => {
  const { title, description, link, linkTitle='Read More' } = props;
  return (
    <div className={style.content_card} {...props}>
      <div className={style.media}></div>
      <div className={style.content}>
        <h3 className='card_heading_typography'>{title}</h3>
        <div className={style.description}>
          {description.map((item, index) => <p key={index} className='card_text_typography'>{item}</p>)}
        </div>
        <a href={link} className='anchor_typography'>{linkTitle}</a>
      </div>
      <div className="interactive_bar"></div>
    </div>
  )
}

ContentCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
};

export default ContentCard;