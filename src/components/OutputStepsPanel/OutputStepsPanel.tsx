import React, { FC } from "react";
import styles from './OutputStepsPanel.module.css'


interface OutputStepsPanelProps {
  children: React.ReactNode;
}

const OutputStepsPanel:FC<OutputStepsPanelProps> = ( {children} ) => {
  return (
    <div className={styles.panel}>{children}</div>
  )
}

export default OutputStepsPanel