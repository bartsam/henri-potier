import styles from "./Image.module.scss";
import Image from "next/image";

const ImageBookRatio = ({ alt, src, priority }) => {
  return (
    <div className={styles.cover}>
      <Image src={src} alt={alt} layout="fill" priority={priority} />
    </div>
  );
};
export default ImageBookRatio;
