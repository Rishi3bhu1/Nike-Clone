import {CustomerReview,Footer,Hero,Popularproduct,Services,SpecialOffer,SpecialQuality,Subscribe} from './sections';
import Nav from './components/Nav.jsx';

const App=()=>{
return (
<main className="relative">
  <Nav/>
  <section className="xl:padding-l wide:padding-r padding-b">
    <Hero/>
  </section>
  <section className="padding">
    <Popularproduct/>
  </section>
  <section className="padding">
    <SpecialQuality/>
  </section>
  <section className="padding">
    <Services/>
  </section>
  <section className="padding">
    <SpecialOffer/>
  </section>
  <section className="padding bg-pale-blue">
    <CustomerReview/>
  </section>
  <section className="padding">
    <Subscribe/>
  </section>
  <section className="padding bg-black">
    <Footer/>
  </section>
</main>
)}
export default App;