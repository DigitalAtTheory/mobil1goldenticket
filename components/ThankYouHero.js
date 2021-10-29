import Image from "next/image";
import styles from "../styles/thank-you.module.scss";
import bottle from "../public/CK-bottle.png";

export default function ThankYouHero() {
  return (
    <div className={`${styles.heroContainer}`}>
      <div className="pt-10">
        <Image
          src={bottle}
          placeholder="blur"
          priority
          loading="eager"
          alt="Mobil 1 Golden Ticket Bottle"
        />
      </div>
    </div>
  );
}
