import classNames from "classnames";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

export const TextInput = ({
  id,
  label,
  htmlFor,
  autoComplete,
  required,
  placeholder,
  inlineLabel = true,
  ariaDescribedby,
  onChange,
  error,
  value,
  defaultValue,
  width = "w-full",
  className,
  disabled = false,
  onBlur,
  type = "text",
}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={classNames("block text-sm font-medium text-indigo-700")}
      >
        {label}
      </label>
      <div
        className={classNames("mt-1 relative rounded-md shadow-sm", className)}
      >
        <input
          onChange={onChange}
          aria-describedby={ariaDescribedby}
          type={type}
          name={htmlFor}
          placeholder={placeholder}
          id={id}
          required={required}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          onBlur={onBlur}
          className={classNames(
            "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-indigo-300 rounded-md",
            { block: !inlineLabel },
            width
          )}
          value={value}
          disabled={disabled}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </>
  );
};
