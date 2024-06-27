import PropTypes from 'prop-types';
import style from './ContentCard.module.scss';

const ContentCard = (props) => {
  const {
    setClass = '',
    videoSrc = '',
    imageSrc = '',
    title,
    description = [],
    link = '#',
    linkTitle = 'Read More',
    date = '12 Apr 2021',
    comments = 0,
    views = 0,
    ...rest
  } = props;
  return (
    <div className={`${style.content_card} ${setClass ?? ''}`} {...rest}>
      <div 
        className={`
          ${style.content_card_media}
          ${!imageSrc ? style.content_card_video__poster : ''} 
          ${imageSrc && style.content_card_image__poster}`}
      >
        {videoSrc && (
          <video className={style.content_card_media__video} controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {imageSrc && <img className={style.content_card_media__image} src={imageSrc} alt="card image" />}
      </div>
      <div className={style.content_card_info}>
        <h3 className={`${style.content_card_info_title} ${!imageSrc ? 'card_heading_typography' : 'card_small_heading_typography'}`}>
          {title}
        </h3>
        <div className={style.content_card_info_description}>
          {description.length > 0 &&
            description.map((item, index) => (
              <p key={index} className={`${style.content_card_info_description__text} card_text_typography`}>
                {item}
              </p>
            ))}
        </div>
        <a href={link} className="anchor_typography">
          {linkTitle}
        </a>
      </div>
      <div className={style.content_card_footer}>
        <p className="card_text_typography">{date}</p>
        <div className={style.content_card_actions}>
          <div className={style.content_card_actions_comments}>
            <img
              src="icons/message-circle.svg"
              width={24}
              height={24}
              className={style.content_card_actions_image}
              alt="comments"
            />
            <p className="card_text_typography">{comments}</p>
          </div>
          <div className={style.content_card_actions_views}>
            <img className={style.content_card_actions_image} src="icons/eye.svg" width={24} height={24} alt="view" />
            <p className="card_text_typography">{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentCard.propTypes = {
  setClass: PropTypes.string,
  videoSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.array,
  link: PropTypes.string,
  linkTitle: PropTypes.string,
  date: PropTypes.string,
  comments: PropTypes.number,
  views: PropTypes.number,
};

export default ContentCard;
