import { lazy } from 'react';
const Section = lazy(() => import('src/components/Section'));
const Button = lazy(() => import('src/components/Button'));
const FeatureCard = lazy(() => import('src/components/FeatureCard'));
const ServiceCard = lazy(() => import('src/components/ServiceCard'));
import features from 'src/assets/json/features.json';
import services from 'src/assets/json/services.json';
import style from './Hero.module.scss';

const Home = () => {
  return (
    <main>
      {/* TODO: Make Hero component */}
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
      {/* FEATURES */}
      <Section title="Which are the greatest things about it?">
        <div className={style.feature_cards}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>
      {/* SERVICES */}
      <Section
        title="More things to explore"
        description="Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
      >
        <div className={style.service_cards}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default Home;
