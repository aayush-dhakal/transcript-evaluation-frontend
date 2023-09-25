import { Button } from "react-bootstrap";
import styles from "../../styles/Common.module.scss";

const ButtonComponent = ({ text, type = "" }) => {
  return (
    <Button size="lg" className={styles.buttonComponent} type={type}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
