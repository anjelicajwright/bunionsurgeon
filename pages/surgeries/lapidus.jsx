import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { Layout } from "../../components/templates/Layout";
import style from "./Lapidus.module.css";

export default function lapidus() {
  return (
    <>
      <Head />
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
          <h1>Lapidus Procedure</h1>
          <p>
            The Lapidus procedure is recommended for people with more severe
            bunions or who are hypermobile.
          </p>
        </div>
        <div className={style.lapidusCont}>
          <div className={style.video}>Lapidus video to follow</div>
          <div className={style.lapidusIntro}>
            <h2>What are the benefits of the lapidus procedure?</h2>
            <p>
              The lapidus procedure has several benefits for people who suffer
              from a severe bunion, including:
            </p>
            <ul className={style.bulletCont}>
              <li> Preservation of big toe joint function</li>
              <li> Correction and realignment of the structural deformity</li>
              <li>Beneficial for hypermobility as it stabilises the midfoot</li>
              <li> Reduced risk of recurrence</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}
