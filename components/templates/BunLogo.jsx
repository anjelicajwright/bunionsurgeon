import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

export function BunLogo() {
  return (
    <Link href={"/"}>
      <Image
        src="/images/bunion-logo.png"
        height={70}
        width={180}
        alt="Bunion surgeon logo"
        className={styles.bunionLogo}
      />
    </Link>
  );
}
