import * as React from "react";
import { useField } from "formik"
import { InputFieldProps } from "../../Types/Types";
import '../../assets/styles/Signup.css'
export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  return <>
    <div className="col">
      <label htmlFor="input" className="form-label">
        {label}

      </label>
      <input {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">
          {meta.error}
        </div>
      ) : null}
    </div>
  </>
}