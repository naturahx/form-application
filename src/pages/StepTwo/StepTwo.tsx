import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./StepTwo.module.css";
import { Link } from "react-router-dom";
import { useState } from 'react'

const StepTwo = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option: any, e: any) => {
    e.preventDefault();
    setSelectedOption(option);
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
        <div>
            <button
                className={selectedOption === 'option1' ? 'selected' : ''}
                onClick={(e) => handleSelectOption('option1', e)}
            >
                Option 1
            </button>
            <button
                className={selectedOption === 'option2' ? 'selected' : ''}
                onClick={(e) => handleSelectOption('option2', e)}
            >
                Option 2
            </button>
            <button
                className={selectedOption === 'option3' ? 'selected' : ''}
                onClick={(e) => handleSelectOption('option3', e)}
            >
                Option 3
            </button>
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
