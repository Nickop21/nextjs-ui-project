import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import Navbar from "@/components/Navbar";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChoose/>
    <MusicSchoolTestimonials/>
    <UpcomingWebinars/>
    <Footer/>
  </main>
  );
}
