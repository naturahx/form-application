import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./StepOne.module.css";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (
    <FormWrapper>
      <BarSteps>
        <Link to="/stepone">
          <ActiveStep>1</ActiveStep>
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
          <InactiveStep>4</InactiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 4</span>
      </BarSteps>
      <OutputStepsPanel>
        <div>fergergerger</div>
      </OutputStepsPanel>
    </FormWrapper>
  );
};

export default StepOne;
