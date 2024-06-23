import style from './Footer.module.scss'

const Footer = () => {
  const socials = [
    {src: 'icons/twitter.svg', alt: 'twitter'},
    {src: 'icons/facebook2.svg', alt: 'facebook'},
    {src: 'icons/instagram.svg', alt: 'instagram'},
  ]
  
  return (
    <footer className={style.footer}>
      <div className='max-content'>
        <div className={style.footer_socials}>
          {socials.map(social => 
            <img key={social.alt} src={social.src} width={24} height={24} loading='lazy' alt={social.alt} />)
          }
        </div>
        <div className={style.footer_copyright}>
          <img src="icons/copyright.svg" width={24} height={24} loading='lazy' alt="copyright" />
          <span className="anchor_typography">Copyright, 2021</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;