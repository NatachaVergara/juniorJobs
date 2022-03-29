import FeaturedCards from "./FeaturedCards";
import Hero from "./Hero";

// ============ JUST CLONING THE HOMEPAGE, NEEDS RE MAKE FOR OUR PLATFORM ===================
export const HomePage = () => {
  return (
    <>
      <h1>We curate tech jobs for you.</h1>
      <p>
        Get on Board allows you to easily find and apply to exclusive jobs in
        awesome startups and tech companies. We filter jobs so you don't have
        to.
      </p>
      <Hero />

      <FeaturedCards />
    </>
  );
};
