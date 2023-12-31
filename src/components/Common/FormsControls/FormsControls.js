
import React from "react"
import styles from './FormsControls.module.css'

export const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : + "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span className={styles.error}>{meta.error}</span>}
    </div>
  )
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>

};

// export const Input = (props) => {
//   const { input, meta, child, ...restProps } = props;
//   return <FormControl {...props}>  <input {...input} {...restProps} /> </FormControl>
// };
export const Input = ({ field, form, ...props }) => {
  const { name, value, onChange, onBlur } = field;
  const { touched, errors } = form;

  return (
    <div>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {touched[name] && errors[name] && <div className="error">{errors[name]}</div>}
    </div>
  );
};


