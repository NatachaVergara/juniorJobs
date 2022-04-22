import { Container } from "reactstrap";
import FeaturedCards from "../components/Home/FeaturedCards";
import Hero from "../components/Home/Hero";
import MainContainer from "../components/Home/MainContainer";
import SubFooter from "../components/Home/SubFooter";

// ============ JUST CLONING THE HOMEPAGE, NEEDS RE MAKE FOR OUR PLATFORM ===================
export const HomePage = () => {
  return (
    <>
      <Container className='ms-md-2 text-center'>
        <h1 className='mt-5'>Find your dream job</h1>
        <p className='p-3'>
          Junior Jobs allows you to easily find and apply to exclusive jobs in
          awesome startups and tech companies. We filter jobs so you don't have
          to.
        </p>
       <div className="">
        <Hero />
        <FeaturedCards />
        <MainContainer />
        <SubFooter />
        </div>
      </Container>
    </>
  );
};
