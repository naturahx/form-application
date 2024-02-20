import ActiveStep from "../../components/ActiveStep/ActiveStep"
import BarSteps from "../../components/BarSteps/BarSteps"
import FormWrapper from "../../components/FormWrapper/FormWrapper"
import OutputStepsPanel from "../../components/OutputStepsPanel/OutputStepsPanel"
import styles from './StepOne.module.css'


const StepOne = () => {
  return (
    <FormWrapper>
    <BarSteps>
      <ActiveStep>1</ActiveStep>
      <span className={styles.steptitle}>STEP 1</span>
      </BarSteps>
    <OutputStepsPanel>
      <div>fergergerger</div>
      </OutputStepsPanel>
    </FormWrapper>
  )
}

export default StepOne