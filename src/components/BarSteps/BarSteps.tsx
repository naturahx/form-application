import React, { FC } from "react";
import styles from './BarSteps.module.css'


interface BarStepsProps {
  children: React.ReactNode;
}

const BarSteps:FC<BarStepsProps> = ( {children} ) => {
  return (
    <div className={styles.bar}>{children}</div>
  )
}

export default BarSteps