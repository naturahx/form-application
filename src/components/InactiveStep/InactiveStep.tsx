import React, { FC } from "react";
import styles from './InactiveStep.module.css'

interface InactiveStepProps {
  children: React.ReactNode;
}

const InactiveStep: FC<InactiveStepProps> = ({ children }) => {
  return <button className={styles.inactivestep}>{children}</button>;
};

export default InactiveStep;
