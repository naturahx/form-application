import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./ThankYou.module.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <FormWrapper>
      <BarSteps>
        <Link to="/">
          <InactiveStep>1</InactiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 1</span>
        <Link to="/steptwo">
          <InactiveStep>2</InactiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 2</span>
        <Link to="/stepthree">
          <InactiveStep>3</InactiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 3</span>
        <Link to="/stepfour">
          <ActiveStep>4</ActiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 4</span>
      </BarSteps>
      <OutputStepsPanel>
        <h1>Thank You</h1>
        <h3>Checked your Email !</h3>
        <div className={styles.block}>
          <Link to="/">
            <Button>Go to STEP 1</Button>
          </Link>
        </div>
      </OutputStepsPanel>
    </FormWrapper>
  );
};


export default ThankYou