import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="mb-10"></div>
      <Footer />
    </div>
  );
}
