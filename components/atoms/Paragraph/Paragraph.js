import styles from "./Paragraph.module.scss";

const Paragraph = ({
  children,
  black,
  white,
  normal,
  bold,
  small,
  tiny,
  regular,
  medium,
  large,
  upper,
  fade,
  fader,
  crossed,
}) => {
  return (
    <p
      className={`
      ${styles.paragraph} ${black ? styles[`paragraph--black`] : ""} ${
        white ? styles[`paragraph--white`] : ""
      } ${normal ? styles[`paragraph--normal`] : ""} ${
        bold ? styles[`paragraph--bold`] : ""
      } ${small ? styles[`paragraph--small`] : ""} ${
        tiny ? styles[`paragraph--tiny`] : ""
      } ${regular ? styles[`paragraph--regular`] : ""} ${
        medium ? styles[`paragraph--medium`] : ""
      } ${large ? styles[`paragraph--large`] : ""} ${
        upper ? styles[`paragraph--upper`] : ""
      } ${fade ? styles[`paragraph--fade`] : ""} ${
        fader ? styles[`paragraph--fader`] : ""
      } ${crossed ? styles[`paragraph--crossed`] : ""} `}
    >
      {children}
    </p>
  );
};
export default Paragraph;
