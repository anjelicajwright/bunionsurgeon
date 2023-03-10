import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { PecaSvg1 } from "../../components/svg/peca/PecaSvg1";
import { PecaSvg2 } from "../../components/svg/peca/PecaSvg2";
import { PecaSvg3 } from "../../components/svg/peca/PecaSvg3";
import { PecaSvg4 } from "../../components/svg/peca/PecaSvg4";
import { PecaSvg5 } from "../../components/svg/peca/PecaSvg5";
import { Layout } from "../../components/templates/Layout";
import style from "./MinimallyInvasive.module.css";
import { useState } from "react";
import { Modal } from "../../components/templates/Modal";
import { MisTimeline } from "../../components/surgeryTimelines/MisTimeline";

const pecaSteps = [
  {
    title: "Step one",
    text: "A small 2mm incision is made allowing the first metatarsal to be cut.",
    image: <PecaSvg1 />,
  },
  {
    title: "Step two",
    text: "The head of the first metatarsal is repositioned, to partially minimise the bony prominence.",
    image: <PecaSvg2 />,
  },
  {
    title: "Step three",
    text: "Two screws are used to fix both sections of the metatarsal in its new position.",
    image: <PecaSvg3 />,
  },
  {
    title: "Step four",
    text: "A wedge is removed from the first proximal phalanx to reposition the toe into a straighter natural alignment. This is also fixed in place with a screw.",
    image: <PecaSvg4 />,
  },
  {
    title: "Step five",
    text: "The protruding bone is cut away and flattened to a natural outer arc.",
    image: <PecaSvg5 />,
  },
];

export default function MinimallyInvasive() {
  const [item, setItem] = useState(false);

  return (
    <>
      <Head />
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
          <h1>Minimally Invasive Bunion Surgery</h1>
          <p>
            With over 98% success rate, The Bunion Surgeon is one of the leading
            minimally invasive bunion experts in the United Kingdom.
          </p>
        </div>
        <div className={style.misCont}>
          <div className={style.video}>MIS video to follow</div>
          <div className={style.misIntro}>
            <h2>What are the benefits of minimally invasive bunion surgery?</h2>
            {/* <p>
              Minimally Invasive Surgery, also known as Keyhole Surgery, uses
              modern techniques and equipment to decrease the number and size of
              incisions during surgery.
            </p> */}
            <p>
              The minimally invasive bunion surgery has several benefits
              including:
            </p>
            <ul className={style.bulletCont}>
              <li> Reduced swelling following surgery</li>
              <li> Decreased postoperative pain</li>
              <li> Faster return to closed footwear and normal activities</li>
              <li> Smaller incision resulting in less visible scar</li>
              <li> Reduced chance of joint stiffness</li>
            </ul>
          </div>
        </div>
        <div className={style.whatIs}>
          <h2>What is Minimally Invasive Bunion Surgery?</h2>
          <p>
            Keyhole bunion surgery, or minimally invasive bunion surgery, is a
            modern technique to surgically correct a bunion.
          </p>
          <p>
            A live X-ray machine is utilised during the procedure to aid the cut
            and resetting of the bone malalignment using 3 to 4 small 1 to 3mm
            incisions to guide the specialised surgical instruments designed for
            bunion correction, that will fix the bones in the corrected
            position.
          </p>
          <p>
            The area heals much quicker than more traditional bunion correction.
            This is due to minimal scar tissue.
          </p>
          <p>
            Mr Kaser Nazir has seen excellent results with his patients who have
            reduced pain and quicker recovery.
          </p>
        </div>
        <div className={style.howCont}>
          <h2 className={style.howTitle}>
            How is the minimally invasive bunion procedure performed?
          </h2>
          <div className={style.svgCont}>
            {/* <div className={!item ? style.stepsCont : ""}> */}
            {pecaSteps.map((item) => {
              return (
                <div
                  key={item.title}
                  className={style.pecaCont}
                  onClick={() => setItem(item)}
                >
                  {item.image}
                  {item.title}
                </div>
              );
            })}
            {/* </div> */}
          </div>
        </div>
        <Modal visible={Boolean(item)} setVisible={setItem}>
          <p>{item.text}</p>
        </Modal>
        <MisTimeline />
        <div className={style.whyImplant}>
          <h2>
            Why is a screw fixation required for the minimally invasive bunion
            correction?
          </h2>
          <p>
            Research shows that without a fixation keeping the joint in place
            once the bones have been realigned increases the risk of
            complication such as delayed or non union of bones and recurrence of
            the deformity.
          </p>
          <p>
            Mr Kaser Nazir utilises the PECA correction system with screws that
            significantly reduces the chance of the bunion recurring and
            provides a predictable recovery.
          </p>
          <p>
            This includes immediate weightbearing with minimal pain and
            swelling.
          </p>
        </div>
      </Layout>
    </>
  );
}
