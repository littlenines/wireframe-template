import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = (props) => {
  const {size = 'small', text = 'Start now'} = props
  return (
    <div {...props}>
      <button
        className={`
            ${style.highlight_button} 
            ${size === 'small' && style.small}
            ${size === 'medium' && style.medium}
            ${size === 'large' && style.large}
        `}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
