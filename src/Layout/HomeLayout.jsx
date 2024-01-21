import React from "react";
import HeroAbout from "../section/Home/Hero/HeroAbout";
import StoryContent from "../section/Home/Stories/StoryContent";
import YoutubeContent from "../section/Home/YoutubeContent/YoutubeContent";
import Newsletter from "../section/Home/Newsletter/Newsletter";
import BlogCards from "../section/Home/BlogCards";
import NewsletterHero from "../section/Home/Newsletter/NewsletterHero";
export default function HomeLayout() {
  return (
    <div>
      <HeroAbout />
      <div className="mx-auto max-w-screen-xl pt-20">
        <StoryContent />
      </div>
      <div className="mx-auto max-w-screen-xl pt-20">
        <YoutubeContent />
      </div>
      <div className="mx-auto pt-28">
        <NewsletterHero />
      </div>
      <div className="mx-auto max-w-screen-xl pt-20">
        <BlogCards />
      </div>
    </div>
  );
}
