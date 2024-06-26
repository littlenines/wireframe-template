import PropTypes from 'prop-types';
import Avatar from 'src/components/Avatar';
import style from './TeamCard.module.scss'

const TeamCard = (props) => {
  const {image='', name, position} = props
  return (
    <div className={style.team_card}>
      <Avatar image={image} setClass='mb-24'/>
      {name && <h3 className='mb-8 card_heading_typography'>{name}</h3>}
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