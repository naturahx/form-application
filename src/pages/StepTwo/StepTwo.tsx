import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./StepTwo.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const StepTwo = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleClick = (index: any) => {
    setActiveDiv(index);
  };

  return (
    <FormWrapper>
      <BarSteps>
        <Link to="/stepone">
          <InactiveStep>1</InactiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 1</span>
        <Link to="/steptwo">
          <ActiveStep>2</ActiveStep>
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
        <h1>Select your plan</h1>
        <h3>Select option arcade / advanced / pro</h3>
        <div className={styles.display}>
          <div
            className={styles.radio}
            style={{
              background: activeDiv === 1 ? "#3333" : "white",
            }}
            onClick={() => handleClick(1)}
          >
            Arcade <div className={styles.month}>9/mo</div>
          </div>
          <div
            className={styles.radio}
            style={{
              background: activeDiv === 2 ? "#3333" : "white",
            }}
            onClick={() => handleClick(2)}
          >
            Advanced <div className={styles.month}>12/mo</div>
          </div>
          <div
            className={styles.radio}
            style={{
              background: activeDiv === 3 ? "#3333" : "white",
            }}
            onClick={() => handleClick(3)}
          >
            Pro <div className={styles.month}>15/mo</div>
          </div>
        </div>
        <div className={styles.block}>
          <Link to="/stepthree">
            <Button>Next Step</Button>
          </Link>
        </div>
      </OutputStepsPanel>
    </FormWrapper>
  );
};

export default StepTwo;
