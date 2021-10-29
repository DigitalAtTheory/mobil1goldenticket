import Image from "next/image";
import styles from "../styles/Home.module.scss";
import lockup from "../public/Mobil-x-Counts-Kustom-Lockup-NEG.png";

export default function LockUp() {
  return (
    <div className={`${styles.lockupContainer} relative z-30 px-12 pt-8`}>
      <Image src={lockup} placeholder="blur" priority loading="eager" />
    </div>
  );
}
