import styles from "./Button.module.scss";
import Link from "next/link";

const Button = ({ href, event, external, label, theme, children }) => {
  return href !== undefined ? (
    <Link href={href}>
      <a
        aria-label={label}
        className={`
          ${styles.button} 
          ${theme ? styles[`button--${theme}`] : ""}
        `}
        target={external && "_blank"}
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
