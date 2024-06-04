import style from './FormCard.module.scss'
// TODO: Make props
const FormCard = () => {
  return (
    <form className={style.form_card}>
      <h2 className='big_heading_typography'>Send us a message</h2>
      <input type="text" placeholder='Name' className='section_typography' required/>
      <input type="email" placeholder='E-mail' className='section_typography' required/>
      <textarea name="message" placeholder='Your Message' className='section_typography'></textarea>
      <button type='submit' className='anchor_typography'>SEND</button>
    </form>
  )
}

export default FormCard;