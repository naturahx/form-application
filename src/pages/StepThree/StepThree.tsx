import ActiveStep from "../../components/ActiveStep/ActiveStep";
import BarSteps from "../../components/BarSteps/BarSteps";
import Button from "../../components/Button/Button";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import InactiveStep from "../../components/InactiveStep/InactiveStep";
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel";
import styles from "./StepThree.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const StepThree = () => {
  const [add, setAdd] = useState<string[]>([]);

  const setAddNew = (addValue: string) => {
    setAdd(prevAdd => [...prevAdd, addValue]);
  }
  
  const dataToAdd = add;
  
  useEffect(() => {
    localStorage.setItem('dataToAdd', JSON.stringify(dataToAdd));
  }, [dataToAdd]);
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
          <ActiveStep>3</ActiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 3</span>
        <Link to="/stepfour">
          <InactiveStep>4</InactiveStep>
        </Link>
        <span className={styles.steptitle}>STEP 4</span>
      </BarSteps>
      <OutputStepsPanel>
        <h1>Pick add-ons</h1>
        <h3>Add-ons help your gaming experience.</h3>
        <div>
      <div className={styles.checkboxContainer}>
        <input onClick={() => setAddNew('+1 $')} type="checkbox" id="checkbox1" className={styles.customCheckbox} />
        <label htmlFor="checkbox1">+1 $  Onlise Service</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input onClick={() => setAddNew('+2 $')} type="checkbox" id="checkbox2" className={styles.customCheckbox} />
        <label htmlFor="checkbox2">+2 $  Storage 1TB</label>
      </div>
  
      <div className={styles.checkboxContainer}>
        <input onClick={() => setAddNew('+2 $')} type="checkbox" id="checkbox3" className={styles.customCheckbox} />
        <label htmlFor="checkbox3">+2 $  Custom Profile</label>
      </div>
    </div>
        <div className={styles.block}>
          <Link to="/stepfour">
            <Button>Next Step</Button>
          </Link>
        </div>
      </OutputStepsPanel>
    </FormWrapper>
  );
};

export default StepThree;
