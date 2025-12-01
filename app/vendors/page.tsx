"use client";
import BenefitsManageSection from "../components/BenefitsManageSection";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";

const VendorsPage = () => {
  return <div>
   <HeroSection
  headingHighlight="Success"
  cards={[
    { imgSrc: "/hero-img-one.png" },
    {
      imgSrc: "/hero-img-two.png",
      title: "Accept Booking Seamlessly",
      description: "Receive and respond to requests in-app.",
    },
    { imgSrc: "/hero-img-three.png" },
    {
      imgSrc: "/hero-img-four.png",
      title: "Track Your Success In Real Time",
      description: "Access analytics to see how your business is performing.",
    },
  ]}
/>

   <HowItWorksSection
  leftSubtitle="HOW IT WORKS"
  leftHeader="How Does Celedom Work?"
  leftParagraph="Set up your business profile in just a few minutes and instantly showcase your services, skills, and specialties to thousands of celebrants actively searching for vendors to hire for their birthdays, weddings, and other special events"
  primaryCtaText="Read about us"
  secondaryCtaText="Download App"
  features={[
    {
      icon: "/acceptance-logo.png",
      title: "Accept Requests with Ease",
      description: "Get notified when celebrants are interested in your services and respond quickly to booking requests. With everything managed in-app, confirming events is simple, fast, and stress-free.",
    },
    {
      icon: "/track-business-logo.png",
      title: "Track Your Business Performance",
      description: "Custom description for feature 2.",
    },
    {
      icon: "/stay-organized-logo.png",
      title: "Custom Feature 3",
      description: "Custom description for feature 3.",
    },
  ]}
/>

    <BenefitsSection/>
    <BenefitsManageSection/>
    <TestimonialsSection/>
  </div>;
};

export default VendorsPage;
