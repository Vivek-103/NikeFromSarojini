import { CustomerReviews,Footer,Hero,PopularProducts,SpecialOffer,FollowUs,SuperQuality,Services } from "./sections";
import Nav from "./components/Nav";
const App=()=> (
  <main className="relative">
   { <Nav />  }
    <section className="xl:padding-l xl:padding-r padding-b">
    <Hero />
   </section>
    <section className="padding">
    <PopularProducts />
    </section>
    <section className="padding">
    <SuperQuality />
    </section>
    <section className="padding-x py-10">
    <Services />
    </section>
    <section className="padding">
    <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReviews />
    </section><section className="padding-x sm:py-32 py-16 w-full">
    <FollowUs />
    </section><section className="bg-black padding-x padding-t pb-8">
    <Footer />
    </section>
  </main>
);


export default App;