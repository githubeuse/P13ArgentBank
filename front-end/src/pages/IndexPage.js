import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
import "./IndexPage.css";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="features">
          <FeatureCard
            icon={iconChat}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureCard
            icon={iconMoney}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureCard
            icon={iconSecurity}
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
