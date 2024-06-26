import PropTypes from 'prop-types';

const Tabs = (props) => {
  const { setClass, tabs, ...rest } = props

  return (
    <ul className={`anchor_typography ${setClass || ''}`} {...rest}>
      {tabs.map(item => <li key={item.tab}><a href={item.href}>{item.tab}</a></li>)}
    </ul>
  )
}

Tabs.propTypes = {
  setClass: PropTypes.string,
  tabs: PropTypes.array
};

export default Tabs;