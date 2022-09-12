import './App.css';
import CallToAction from './CallToAction';
import ContactForm from './ContactForm';
import FireSection from './FirstSection';
import Footer from './Footer';
import Gallery from './Gallery';
import GridSection from './GridSection';
import Header from './Header';
import HowTo from './HowTo';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import WorkSection from './WorksSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FireSection />
      <SecondSection />
      <ThirdSection />
      <GridSection />
      <WorkSection />
      <Gallery />
      <HowTo />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
