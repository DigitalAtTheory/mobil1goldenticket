import Image from "next/image";
import styles from "../styles/Home.module.scss";
import bike from "../public/counts-kustoms-motorcycle.png";

export default function HeroImage() {
  return (
    <div className={`px-6 pt-6 ${styles.heroImage}`}>
      <Image
        src={bike}
        placeholder="blur"
        priority
        loading="eager"
        alt="Counts Kustoms Motorcycle"
      />
    </div>
  );
}
