import PropTypes from 'prop-types';
import style from './Section.module.scss'

const Section = (props) => {
  return (
    <section {...props}>
      <div className="wrapper max-content">
        <h2 className={`heading_typography ${style.title}`}>{props.title}</h2>
        {props.description && <p className={`section_typography ${style.description}`}>{props.description}</p>}
        {props.children}
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Section;