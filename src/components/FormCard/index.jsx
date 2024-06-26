import style from './FormCard.module.scss';
import PropTypes from 'prop-types';

const FormCard = (props) => {
  const {
    title = 'Send us a message',
    textPlaceholder = 'Name',
    emailPlaceholder = 'E-mail',
    textareaPlaceholder = 'Your Message',
    submitText='SEND'
  } = props;
  return (
    <form className={style.form_card} {...props}>
      <h2 className='mb-32 big_heading_typography'>{title}</h2>
      <input
        type="text"
        placeholder={textPlaceholder}
        className={`${style.form_card_text} mb-16 section_typography`}
        required
      />
      <input
        type="email"
        placeholder={emailPlaceholder}
        className={`${style.form_card_email} mb-16 section_typography`}
        required
      />
      <textarea
        name="message"
        placeholder={textareaPlaceholder}
        className={`${style.form_card_textarea} mb-32 section_typography`}
      ></textarea>
      <button type="submit" className={`${style.form_card_submit} anchor_typography`}>
        {submitText}
      </button>
    </form>
  );
};

FormCard.propTypes = {
  title: PropTypes.string,
  textPlaceholder: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  submitText: PropTypes.string,
};

export default FormCard;
