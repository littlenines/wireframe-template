import PropTypes from 'prop-types';
import style from './ContentCard.module.scss';

const ContentCard = (props) => {
  const {
    setClass,
    videoSrc = '',
    imageSrc = '',
    title,
    description = [],
    link,
    linkTitle = 'Read More',
  } = props;
  return (
    <div className={`${style.content_card} ${setClass ?? ''}`} {...props}>
      <div className={`${style.media} ${style.video_poster}`}>
        {videoSrc && (
          <video className={style.media_video} controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {imageSrc && <img className={style.media_image} src={imageSrc} alt="card image" />}
      </div>
      <div className={style.content}>
        <h3 className={`${style.content_title} card_heading_typography`}>{title}</h3>
        <div className={style.description}>
          {description.length > 0 &&
            description.map((item, index) => (
              <p key={index} className={`${style.description_text} card_text_typography`}>
                {item}
              </p>
            ))}
        </div>
        <a href={link} className="anchor_typography">
          {linkTitle}
        </a>
      </div>
      <div className={style.content_card_footer}>
        <p className="card_text_typography">12 Apr 2021</p>
        <div className={style.actions}>
          <div className={style.actions_comments}>
            <img
              src="icons/message-circle.svg"
              width={24}
              height={24}
              className={style.actions_image}
              alt="comments"
            />
            <p className="card_text_typography">123</p>
          </div>
          <div className={style.actions_views}>
            <img className={style.actions_image} src="icons/eye.svg" width={24} height={24} alt="view" />
            <p className="card_text_typography">4567</p>
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
};

export default ContentCard;
