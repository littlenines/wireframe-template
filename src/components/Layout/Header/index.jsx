import { lazy } from 'react';
import Button from 'src/components/Button';
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
      <div className={`${style.header_tabs} container max-content`}>
        <div className={style.header_navigation}>
          <img src="img/default-img.svg" className={style.header_navigation_logo} width={50} height={50} alt="logo" />
          <div className={style.header_menu}>
            <img src="icons/menu.svg" width={36} height={36} alt="menu" />
          </div>
          <Tabs setClass={style.header_menu_tabs} tabs={tabsArray} />
        </div>
        <Button className='anchor_typography' buttonClassName={style.header_button} />
      </div>
    </header>
  )
}
  
export default Header;