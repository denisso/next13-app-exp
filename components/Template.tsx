import { FormFeedback } from "./FormFeedback";
import styles from "./Template.module.scss";

export const Template = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.Template}>
    <h2 className="Heading">Template content</h2>
    <div>{children}</div>
    <div>
      <FormFeedback />
    </div>
  </div>
);
