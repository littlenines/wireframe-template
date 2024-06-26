/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import style from './Hero.module.scss'

const Hero = (props) => {
  const { title, description, image='img/default-img.svg' } = props
  const hero_style = css`background-image: url(${image});`

  return (
    <section className={style.hero} css={hero_style} {...props}>
      <div className={`container ${style.hero_content} max-content`}>
        <h1 className='mb-40 heading_typography'>
          {title}
        </h1>
        <p className='mb-40 section_typography barely_visible'>
          {description}
        </p>
        <Button size="large" className='anchor_typography' />
      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Hero;