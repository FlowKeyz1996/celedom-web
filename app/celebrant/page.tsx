import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';

const CelebrantPage = () => {
  return (
    <div className="">
         <HeroSection
  headingHighlight="Adventure"
  cards={[
    { imgSrc: "/celebrant-hero-img.png" },
    {
      imgSrc: "/celebrant-hero-img2.png",
      title: "Accept Booking Seamlessly",
      description: "Receive and respond to requests in-app.",
    },
    { imgSrc: "/celebrant-hero-img3.png" },
    {
      imgSrc: "/celebrant-hero-img4.png",
      title: "Track Your Success In Real Time",
      description: "Access analytics to see how your business is performing.",
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
      icon: "/acceptance-logo.png",
      title: "Discover Vendors Just for You",
      description: "Explore a personalized page filled with vendors tailored to your preferences, event type, and style. From birthdays to weddings, you’ll see options that match exactly what you’re looking for.",
    },
    {
      icon: "/track-business-logo.png",
      title: "Send Requests in Seconds",
      description: "Found a vendor you love? Send them a request with just a few taps. Communicate your needs clearly and get quick responses to bring your vision to life.",
    },
    {
      icon: "/stay-organized-logo.png",
      title: "Book Within Your Budget",
      description: "Compare vendors, check their packages, and book the one that fits your budget. With flexible options, you can celebrate your big moments without breaking the bank.",
    },
  ]}
/>

    
    </div>
  );
};

export default CelebrantPage;
