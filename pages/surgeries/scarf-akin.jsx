import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { MisTimeline } from "../../components/surgeryTimelines/MisTimeline";
import { ScarfTimeline } from "../../components/surgeryTimelines/ScarfTimeline";
import { Layout } from "../../components/templates/Layout";
import { Modal } from "../../components/templates/Modal";
import style from "./ScarfAkin.module.css";
import { useState } from "react";
import Image from "next/image";

const scarfSteps = [
  {
    title: "Step one",
    text: "The light ligaments on the other side of the bunion are released.",
    image1: {
      src: "/images/step1-scarf.png",
      alt: "Scarf and akin osteotomy step 1",
    },
    image2: {
      src: "/images/step1-scarf-text.png",
      alt: "Scarf and akin osteotomy step 1",
    },
  },
  {
    title: "Step two",
    text: "The bunion is shaved.",
    image1: {
      src: "/images/step2-scarf.png",
      alt: "Scarf and akin osteotomy step 2",
    },
    image2: {
      src: "/images/step2-scarf-text.png",
      alt: "Scarf and akin osteotomy step 2",
    },
  },
  {
    title: "Step three",
    text: `1. The metatarsal bone is cut.
    
    2. Metatarsal bone is realigned.
    
    3. Screws are used to fix the metatarsal bone in`,
    image1: {
      src: "/images/step3-scarf.png",
      alt: "Scarf and akin osteotomy step 3",
    },
    image2: {
      src: "/images/step3-scarf-text.png",
      alt: "Scarf and akin osteotomy step 3",
    },
  },
  {
    title: "Step four",
    text: "A small wedge is removed from the phalanx to straighten the end of the toe.",
    image1: {
      src: "/images/step4-scarf.png",
      alt: "Scarf and akin osteotomy step 4",
    },
    image2: {
      src: "/images/step4-scarf-text.png",
      alt: "Scarf and akin osteotomy step 4",
    },
  },
  {
    title: "Step five",
    text: "The phalanx is fixed together where the wedge has been removed, promoting a correct alignment of the toe.",
    image1: {
      src: "/images/step5-scarf.png",
      alt: "Scarf and akin osteotomy step 5",
    },
    image2: {
      src: "/images/step5-scarf-text.png",
      alt: "Scarf and akin osteotomy step 5",
    },
  },
];

export default function ScarfAkin() {
  const [item, setItem] = useState(false);
  return (
    <>
      <Head />
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
          <h1>Scarf and Akin Osteotomy</h1>
          <p>
            The Scarf and Akin Osteotomy is one of the most common bunion
            procedures carried out by bunion specialists.
          </p>
        </div>
        <div className={style.scarfCont}>
          <div className={style.video}>Scarf video to follow</div>
          <div className={style.scarfIntro}>
            <h2>What are the benefits of the Scarf and Akin Osteotomy?</h2>
            <ul className={style.bulletCont}>
              <li> Restores foot mechanics</li>
              <li> Allows for correction of small and moderate deformities</li>
              <li> Low recurrence rate</li>
            </ul>
          </div>
        </div>
        <div className={style.whatIs}>
          <h2>What is the Scarf and Akin Osteotomy?</h2>
          <p>
            The Scarf and Akin procedure is used to correct small to moderate
            bunion deformities.
          </p>
          <p>
            It allows early weight-bearing due to the stability of the
            specialised bone cuts and titanium screws used to fix the bone
            alignment in the new position.
          </p>
          <p>
            This corrective bunion procedure is one of the most popular
            operations globally.
          </p>
        </div>
        <div className={style.howCont}>
          <h2 className={style.howTitle}>
            How is the minimally invasive bunion procedure performed?
          </h2>
          <div className={style.stepsCont}>
            {scarfSteps.map((item) => {
              return (
                <div
                  key={item.title}
                  className={style.imageCont}
                  onClick={() => setItem(item)}
                >
                  {item.title}
                  <div>
                    <Image
                      src={item.image1.src}
                      alt={item.image1.alt}
                      fill
                      objectFit="contain"
                      className={style.stepsImage}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal visible={Boolean(item)} setVisible={setItem}>
          <div className={style.modalCont}>
            <div className={style.modalImage}>
              <Image
                src={item?.image2?.src}
                alt={item?.image2?.alt}
                fill
                objectFit="contain"
                className={style.stepsImage}
              />
            </div>
            <p className={style.modalText}>{item.text}</p>
          </div>
        </Modal>
        <ScarfTimeline />
      </Layout>
    </>
  );
}
