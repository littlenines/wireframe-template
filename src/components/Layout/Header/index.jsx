import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.tabs} container`}>
        <div className={style.navigation}>
          <img src="img/default-img.svg" className={style.logo} alt="logo" />
          <div className={style.menu}>
            <img src="icons/menu.svg" alt="menu" />
          </div>
        </div>
        <div className={style.highlight}>
          <button className={style.highlight_button}>Start now</button>
        </div>
      </div>
    </header>
  )
}
  
export default Header;