import PropTypes from 'prop-types';
import Avatar from 'src/components/Avatar';
import style from './TeamCard.module.scss'

const TeamCard = (props) => {
  const {image='', name, position} = props
  return (
    <div className={style.team_card}>
      <Avatar image={image}/>
      {name && <h3 className='card_heading_typography'>{name}</h3>}
      {position && <p className='card_text_typography'>{position}</p>}
    </div>
  )
}

TeamCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
}

export default TeamCard;