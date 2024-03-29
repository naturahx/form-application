import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./StepFour.module.css";
import { Link } from "react-router-dom";


const StepFour = () => {

  const dataPassed = localStorage.getItem('dataToPass');
  const dataAdd = localStorage.getItem('dataToAdd');

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
        <h1>Finishing up</h1>
        <h3>Click OK else all it's OK</h3>
        <form className={styles.formblock}>
          <h2>{dataPassed}</h2>
          <h3>{dataAdd}</h3>
          <h2 className={styles.total}>Total: 12$</h2>
        </form>
        <div className={styles.block}>
          <Link to="/thank">
            <Button>Click to finished</Button>
          </Link>
        </div>
      </OutputStepsPanel>
    </FormWrapper>
  );
};

export default StepFour;
