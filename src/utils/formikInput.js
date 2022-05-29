import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className="form-select" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};
