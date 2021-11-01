import styles from "../styles/loader.module.scss";

export default function Loader() {
  return (
    <div>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
