import styles from "./Image.module.scss";
import Image from "next/image";

const ImageBookRatio = ({ alt, src }) => {
  return (
    <div className={styles.cover}>
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};
export default ImageBookRatio;
