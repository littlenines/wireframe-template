import { lazy } from 'react';
const Button = lazy(() => import('src/components/Button'));
const Tabs = lazy(() => import('../Tabs'))
import style from './Header.module.scss';

const Header = () => {
  const tabsArray = [
    {tab: 'Resources', href: '#'},
    {tab: 'Inspiration', href: '#'},
    {tab: 'Process', href: '#'},
    {tab: 'Our Story', href: '#'}
  ]
  
  return (
    <header className={style.header}>
      <div className={`${style.tabs} container max-content`}>
        <div className={style.navigation}>
          <img src="img/default-img.svg" className={style.logo} alt="logo" />
          <div className={style.menu}>
            <img className={style.menu_image} src="icons/menu.svg" alt="menu" />
          </div>
          <Tabs setClass={style.menu_tabs} tabs={tabsArray} />
        </div>
        <Button className='anchor_typography' buttonClassName={style.header_button} />
      </div>
    </header>
  )
}
  
export default Header;