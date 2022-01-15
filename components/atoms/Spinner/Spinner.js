import styles from "./Spinner.module.scss";

const Spinner = ({ theme }) => {
  return (
    <div
      className={`${styles.spinner} ${
        theme ? styles[`spinner--${theme}`] : ""
      }`}
    >
      <span>Loading</span>
    </div>
  );
};

export default Spinner;
