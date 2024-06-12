/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import style from './Hero.module.scss'

const Hero = (props) => {
  const { title, description, image='img/default-img.svg' } = props
  const hero_style = css`
  background-image: url(${image});
`
  return (
    <section className={style.hero} css={hero_style} {...props}>
      <div className={`container ${style.content}`}>
        <h1 className={`${style.text_content} heading_typography`}>
          {title}
        </h1>
        <p className={`${style.text_content} section_typography barely_visible`}>
          {description}
        </p>
        <Button size="large" />
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