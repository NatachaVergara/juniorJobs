import FeaturedCards from "../components/Home/FeaturedCards";
import MainContainer from "../components/Home/MainContainer";
import SubFooter from "../components/Home/SubFooter";
import style from './Styles/Home.module.scss';


export const HomePage = () => {
  return (
    <main className={style.contenedor}>
      <h1 className='mt-5'>Looking for your first oportunity?</h1>
      <p className='p-3'>
        Junior Jobs allows you to easily find and apply to exclusive jobs in
        awesome startups and tech companies <br />
        We filter jobs so you don't have to
      </p>
      <div>
        <section><FeaturedCards /></section>
        <section><MainContainer /></section>
        <section> <SubFooter /></section>
      </div>
    </main>

  );
};
