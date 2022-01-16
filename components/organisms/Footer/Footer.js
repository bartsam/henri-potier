import styles from "./Footer.module.scss";
import Paragraph from "components/atoms/Paragraph";
import Button from "components/atoms/Button";
import { GitPullRequest, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Paragraph upper bold tiny white>
        Créé et développé par Samuel Bart - Projet sur GitHub
      </Paragraph>
      <div className={styles.social}>
        <Button label="Github" href="https://github.com/bartsam" passHref>
          <GitPullRequest size={16} color="white" />
        </Button>
        <Button
          label="linkedin"
          href="https://www.linkedin.com/samuel-bart/"
          passHref
        >
          <Linkedin size={16} color="white" />
        </Button>
      </div>
    </div>
  );
}
