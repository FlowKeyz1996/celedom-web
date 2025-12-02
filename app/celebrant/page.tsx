import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import BenefitsManageSection from '../components/BenefitsManageSection';
import TestimonialsSection from '../components/TestimonialsSection';

const CelebrantPage = () => {
  return (
    <div className="">
         <HeroSection
  headingHighlight="Adventure"
  cards={[
    { imgSrc: "/celebrant-hero-img.png" },
    {
      imgSrc: "/celebrant-hero-img2.png",
      title: "Celebrate every milestone",
      description: "From birthdays to weddings, every milestone is worth celebrating with the right people, services, and unforgettable experiences.",
    },
    { imgSrc: "/celebrant-hero-img3.png" },
    {
      imgSrc: "/celebrant-hero-img4.png",
      title: "Enjoy your event in style",
      description: "Turn ordinary gatherings into extraordinary experiences with services designed to impress. From décor to dining, find everything you need to create an event that’s elegant & uniquely yours",
    },
  ]}
/>
<HowItWorksSection
  leftSubtitle="How It Works"
  leftHeader="How Does Celedom Work?"
  leftParagraph="Celebrate your special moments in style, knowing you’ve got the right vendors to bring your vision to life and create unforgettable memories."
  primaryCtaText="Read About Us"
  secondaryCtaText="Download App"
  features={[
    {
      icon: "/celebrant-how-it-works-icon1.png",
      title: "Discover Vendors Just for You",
      description: "Explore a personalized page filled with vendors tailored to your preferences, event type, and style. From birthdays to weddings, you’ll see options that match exactly what you’re looking for.",
    },
    {
      icon: "/celebrant-how-it-works-icon.png",
      title: "Send Requests in Seconds",
      description: "Found a vendor you love? Send them a request with just a few taps. Communicate your needs clearly and get quick responses to bring your vision to life.",
    },
    {
      icon: "/celebrant-how-it-works-icon3.png",
      title: "Book Within Your Budget",
      description: "Compare vendors, check their packages, and book the one that fits your budget. With flexible options, you can celebrate your big moments without breaking the bank.",
    },
  ]}
/>
 <BenefitsSection
  label="BENEFITS"
  header="Tailored Recommendations"
  iconPath="/benefit-celebrant-icon.png"
  iconText="Toggle between List and Calendar view"
  description="Enjoy a tailored experience where every suggestion is based on your preference and your event vision. Discover vendors curated based on your preference, so you only see services that match your style and event needs."
  buttonText="Download App"
  imageSrc="/celebrant-benefits-image.png"
  imageAlt="custom calendar UI"
/>
<BenefitsManageSection
  imageSrc="/celebrant-benefits-image2.png"
  tag="BENEFITS"
  title="An easy way to hire"
  iconSrc="/benefits-celebration-icon.png"
  iconAlt="Get vendors for your festivities"
  highlightText="Get vendors for your festivities"
  description="Easily get vendors for your festivities who match your budget, style, and celebration needs. Celebrate with confidence when you get vendors for your festivities, all organized in one place."
  buttonText="Book a request"
/>
<TestimonialsSection/>


    
    </div>
  );
};

export default CelebrantPage;
