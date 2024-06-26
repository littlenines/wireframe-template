import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = (props) => {
  const {size = 'small', text = 'Start now', buttonClassName='', ...rest} = props
  return (
    <div {...rest}>
      <button
        className={`
            ${style.highlight_button} 
            ${size === 'small' ? style.small : ''}
            ${size === 'medium' ? style.medium : ''}
            ${size === 'large' ? style.large : ''}
            ${buttonClassName}
        `}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string,
  buttonClassName: PropTypes.string
};

export default Button;
