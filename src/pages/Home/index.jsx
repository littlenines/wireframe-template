import Button from 'src/components/Button';
import style from './Hero.module.scss'

const Home = () => {
  return (
    <main>
      <section className={style.hero}>
        <div className={`container ${style.content}`}>

          <h1>Tell the whole world about your ideea</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <Button size='large' />
        </div>
      </section>
    </main>
  )
}

export default Home;