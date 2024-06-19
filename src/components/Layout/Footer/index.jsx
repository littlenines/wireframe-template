import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='max-content'>
        <div className={style.socials}>
          <img src="icons/twitter.svg" width={24} height={24} loading='lazy' alt="twitter" />
          <img src="icons/facebook2.svg" width={24} height={24} loading='lazy' alt="facebook" />
          <img src="icons/instagram.svg" width={24} height={24} loading='lazy' alt="instagram" />
        </div>
        <div className={style.copyright}>
          <img src="icons/copyright.svg" width={24} height={24} loading='lazy' alt="copyright" />
          <span className="anchor_typography">Copyright, 2021</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;