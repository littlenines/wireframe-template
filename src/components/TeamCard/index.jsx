import PropTypes from 'prop-types';
import Avatar from 'src/components/Avatar';
import style from './TeamCard.module.scss'

const TeamCard = (props) => {
  const {image='', name, position} = props
  return (
    <div className={style.team_card}>
      <Avatar image={image} setClass={style.team_card_avatar}/>
      {name && <h3 className={`${style.team_card_title} card_heading_typography`}>{name}</h3>}
      {position && <p className='card_text_typography barely_visible'>{position}</p>}
    </div>
  )
}

TeamCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
}

export default TeamCard;