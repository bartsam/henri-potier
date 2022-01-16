import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ href, event, label, passHref, theme, children }) => {
  return href !== undefined ? (
    <Link href={href} passHref={passHref}>
      <a
        aria-label={label}
        className={`
          ${styles.button} 
          ${theme ? styles[`button--${theme}`] : ""}
        `}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      aria-label={label}
      className={`${styles.button} ${theme ? styles[`button--${theme}`] : ""}`}
      onClick={(e) => {
        event();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
