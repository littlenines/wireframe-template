import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socials}>
        <img src="icons/twitter.svg" width={24} height={24} alt="twitter" />
        <img src="icons/facebook2.svg" width={24} height={24} alt="facebook" />
        <img src="icons/instagram.svg" width={24} height={24} alt="instagram" />
      </div>
      <div className={style.copyright}>
        <img src="icons/copyright.svg" width={24} height={24} alt="copyright" />
        <span className="anchor_typography">Copyright, 2021</span>
      </div>
    </footer>
  )
}

export default Footer;