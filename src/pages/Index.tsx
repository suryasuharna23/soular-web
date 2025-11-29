import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CuratedSection } from "@/components/CuratedSection";
import { ThematicCollections } from "@/components/ThematicCollections";
import { CommunityEvents } from "@/components/CommunityEvents";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CuratedSection />
        <ThematicCollections />
        <CommunityEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
