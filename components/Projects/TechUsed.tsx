import styles from "./TechUsed.module.scss";

const TechUsed = ({ frontend, backend }) => {
  return (
    <div className={styles.wrap}>
      {frontend && (
        <div className={styles.listWrap}>
          <h2 className={styles.title}>Frontend</h2>
          <ul className={styles.list}>
            {frontend.map((item) => {
              return (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {backend && (
        <div className={styles.listWrap}>
          <h2 className={styles.title}>Backend</h2>
          <ul className={styles.list}>
            {backend.map((item) => {
              return (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TechUsed;
