import Hero from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';
import Mission from '../components/Mission';
import NewsSection from '../components/NewsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <Mission />
      
      <NewsSection />
    </>
  );
}