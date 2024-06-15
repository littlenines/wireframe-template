import PropTypes from 'prop-types';

const Tabs = (props) => {
  const { setClass, tabs } = props

  return (
    <ul className={`anchor_typography ${setClass || ''}`} {...props}>
      {tabs.map(item => <li key={item.tab}><a href={item.href}>{item.tab}</a></li>)}
    </ul>
  )
}

Tabs.propTypes = {
  setClass: PropTypes.string,
  tabs: PropTypes.array
};

export default Tabs;