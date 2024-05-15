import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={style.button} {...props}>
      <button
        className={`
            ${style.highlight_button} 
            ${props.size === 'small' && style.small}
            ${props.size === 'medium' && style.medium}
            ${props.size === 'large' && style.large}
        `}
      >
        {props.text}
      </button>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  size: 'small',
  text: 'Start now',
};

export default Button;
