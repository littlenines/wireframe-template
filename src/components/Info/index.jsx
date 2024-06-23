import style from './Info.module.scss';
import PropTypes from 'prop-types';

const Info = (props) => {
  const defaultContent = [
    { id: '09ca02c0', icon: 'icons/location.svg', title: 'Address' },
    { id: '95992e5c', icon: 'icons/email.svg', title: 'E-mail Address' },
    { id: 'dd87b95a', icon: 'icons/phone.svg', title: 'Phone Number' },
  ];
  const { title = 'London, UK', content = defaultContent } = props;
  return (
    <div className={style.info} {...props}>
      {title && <h3 className={style.info_title}>{title}</h3>}
      {content.map(info => 
        <div key={info.id} className={style.info_icon}>
          <img src={info.icon} width={24} height={24} alt={info.title} />
          <span className="section_typography">{info.title}</span>
        </div>
      )}
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
  })),
};

export default Info;
