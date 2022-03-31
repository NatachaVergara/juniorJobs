import FeaturedCards from "../components/Home/FeaturedCards";
import Hero from "../components/Home/Hero";
import MainContainer from "../components/Home/MainContainer";
import SubFooter from "../components/Home/SubFooter";

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
      <MainContainer/>
      <SubFooter/>
    </>
  );
};
