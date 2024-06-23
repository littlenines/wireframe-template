import PropTypes from 'prop-types';
import style from './Section.module.scss'

const Section = (props) => {
  return (
    <section {...props}>
      <div className="wrapper max-content">
        <div className={style.section}>
          <h2 className={`heading_typography ${style.section_title}`}>{props.title}</h2>
          {props.description && <p className={`section_typography ${style.section_description}`}>{props.description}</p>}
        </div>
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