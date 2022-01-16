import styles from "./Footer.module.scss";
import Paragraph from "@components/atoms/Paragraph";
import Button from "@components/atoms/Button";
import { GitPullRequest, Linkedin, Link } from "react-feather";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Paragraph upper bold tiny white>
        Projet sur GitHub créé et développé par Samuel Bart
      </Paragraph>
      <div className={styles.social}>
        <Button label="Github" href="https://github.com/bartsam" external>
          <GitPullRequest size={16} color="white" />
        </Button>
        <Button label="Portfolio" href="https://samuelbart.fr/" external>
          <Link size={16} color="white" />
        </Button>
        <Button
          label="linkedin"
          href="https://www.linkedin.com/in/samuel-bart/"
          external
        >
          <Linkedin size={16} color="white" />
        </Button>
      </div>
    </div>
  );
}
