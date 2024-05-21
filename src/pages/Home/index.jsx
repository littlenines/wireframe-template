import Button from 'src/components/Button';
import style from './Hero.module.scss';

const Home = () => {
  return (
    <main>
      <section className={style.hero}>
        <div className={`container ${style.content}`}>
          <h1 className={style.text_content}>
            Tell the whole world about your ideea
          </h1>
          <p className={style.text_content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
            massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
          <Button size="large" />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className={style.features_title}>Which are the greatest things about it?</h2>
          <div className={style.feature_cards}>
            
            <div className={style.card}>
              <div className={style.icon}>
                <img src="icons/lightbulb.svg" alt="lightbulb" />
              </div>
              <div className={style.card_content}>
                <h3 className={style.content_title}>Feature One</h3>
                <p className={style.content_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
            </div>

            <div className={style.card}>
              <div className={style.icon}>
                <img src="icons/lightbulb.svg" alt="lightbulb" />
              </div>
              <div className={style.card_content}>
                <h3 className={style.content_title}>Feature One</h3>
                <p className={style.content_description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
