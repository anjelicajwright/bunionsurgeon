import Image from "next/image";
import style from "./BulletpointSurgery.module.css";

export function HappyFeet() {
  return (
    <Image
      src="/images/happy-feet.jpg"
      fill
      objectFit="cover"
      objectPosition="top"
      alt="Image of one foot with bunion and one without"
      className={style.happyFeet}
    />
  );
}
