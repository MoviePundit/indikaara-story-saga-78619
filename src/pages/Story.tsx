import { StoryHero } from "@/components/StoryHero";
import { OriginStory } from "@/components/OriginStory";
import { MissionVision } from "@/components/MissionVision";
import { CoreValues } from "@/components/CoreValues";
import { Timeline } from "@/components/Timeline";
import { TeamSection } from "@/components/TeamSection";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { Testimonials } from "@/components/Testimonials";
import { StoryCallToAction } from "@/components/StoryCallToAction";

const Story = () => {
  return (
    <div className="min-h-screen">
      <StoryHero />
      <OriginStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <TeamSection />
      <ImpactMetrics />
      <Testimonials />
      <StoryCallToAction />
    </div>
  );
};

export default Story;
