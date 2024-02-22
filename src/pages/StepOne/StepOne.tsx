import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./StepOne.module.css";
import { Link } from "react-router-dom";

const StepOne = () => {
  return (
    <FormWrapper>
      <BarSteps>
        <Link to="/">
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
        <h1>Personal Info</h1>
        <h3>Please, provide your name, email adress and phone number</h3>
        <p>Name:</p>
        <input className={styles.input} placeholder="Your name"></input>
        <p>Email Addres:</p>
        <input type="email" className={styles.input} placeholder="Your Email" required/>
        <p>Phone Number:</p>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required  className={styles.input} placeholder="Your Phone"></input>
        <div className={styles.block}>
        <Link to="/steptwo">
          <Button>Next Step</Button>
        </Link>
        </div>
      </OutputStepsPanel>
    </FormWrapper>
  );
};

export default StepOne;
