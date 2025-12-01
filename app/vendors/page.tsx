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
      description: "Receive and respond to requests in-app, making it easy to secure clients and confirm events without the hassle.",
    },
    { imgSrc: "/hero-img-three.png" },
    {
      imgSrc: "/hero-img-four.png",
      title: "Track Your Success In Real Time",
      description: "Access powerful analytics to see how your business is performing and make smarter decisions to grow.",
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
      description: "Access built-in analytics that show you how your business is doing, from the number of bookings to client engagement. Use insights to grow smarter and make better decisions for your services.",
    },
    {
      icon: "/stay-organized-logo.png",
      title: "Stay Organized with Your Calendar",
      description: "Set up your calendar directly in the app to manage all your upcoming events. Never miss a booking, double-check your schedule, and keep your business running smoothly.",
    },
  ]}
/>

    <BenefitsSection
  label="FEATURES"
  header="Manage Your Bookings Efficiently"
  iconPath="/icons/custom-icon.svg"
  iconText="Toggle between List and Calendar view"
  description="Quickly check your upcoming events in list view or visually plan them in calendar view. Make your workflow smooth and efficient."
  buttonText="Get Started"
  imageSrc="/Benefits-img.png"
  imageAlt="custom calendar UI"
/>
    <BenefitsManageSection/>
    <TestimonialsSection/>
  </div>;
};

export default VendorsPage;
