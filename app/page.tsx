import { About } from "@/components/About";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div>
      <StarsBackground/>
      <ShootingStars/>
      <Hero/>
      <Projects/>
      <About/>
    </div>
  );
}
