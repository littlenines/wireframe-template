import { lazy } from 'react';

import Hero from 'src/components/Hero';

const Section = lazy(() => import('src/components/Section'));
const FeatureCard = lazy(() => import('src/components/FeatureCard'));
const ServiceCard = lazy(() => import('src/components/ServiceCard'));
const TeamCard = lazy(() => import('src/components/TeamCard'));
const ContentCard = lazy(() => import('src/components/ContentCard'));
const FormCard = lazy(() => import('src/components/FormCard'));
const Info = lazy(() => import('src/components/Info'));

import hero from 'src/assets/json/hero.json';
import features from 'src/assets/json/features.json';
import services from 'src/assets/json/services.json';
import ourStory from 'src/assets/json/ourStory.json';
import team from 'src/assets/json/team.json';
import contact from 'src/assets/json/contact.json';

import style from './Home.module.scss';

const Home = () => {
  return (
    <main>
      {/* HERO */}
      <Hero title={hero.title} description={hero.description} />

      {/* FEATURES */}
      <Section title={features.title}>
        <div className={style.feature_cards}>
          {features.content.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section title={services.title} description={services.description}>
        <div className={style.service_cards}>
          {services.content.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section title={team.title} description={team.description}>
        <div className={style.team_cards}>
          {team.content.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </Section>

      {/* OUR STORY */}
      <Section title={ourStory.title} description={ourStory.description}>
        <div className={style.our_story}>
          {ourStory.content_videos.map((video) => 
            <ContentCard
              key={video.id}
              title={video.title}
              description={video.description}
              setClass={style.our_story_video}
            />
          )}
          <div className={style.our_story_images}>
            {ourStory.content_images.map((image) => 
              <ContentCard
                key={image.id}
                title={image.title}
                imageSrc={image.src}
              />
            )}
          </div>
        </div>
      </Section>

      {/* CONTACT US */}
      <Section title={contact.title}>
        <div className={style.contact_us}>
          <FormCard />
          <Info />
        </div>
      </Section>
    </main>
  );
};

export default Home;
