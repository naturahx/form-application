import React, { FC } from "react";
import styles from './ActiveStep.module.css'

interface ActiveStepProps {
  children: React.ReactNode;
}

const ActiveStep: FC<ActiveStepProps> = ({ children }) => {
  return <button className={styles.activestep}>{children}</button>;
};

export default ActiveStep;
