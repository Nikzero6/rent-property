import classNames from "classnames";
import { CircleLoader } from "./Loader";

export const PrimaryButton = ({
  children,
  onClick,
  loading = false,
  variant = "medium",
  disabled,
  value,
  className,
}) => {
  return (
    <button
      type="button"
      className={classNames(
        variant === "small" ? "px-2.5 py-1.5 text-xs" : "px-4 py-2 text-sm",
        `text-center inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
        { "disabled:opacity-75": loading || disabled },
        className
      )}
      disabled={loading || disabled}
      onClick={onClick}
      value={value}
    >
      {loading ? <CircleLoader classes={"h-5 w-5"} /> : children}
    </button>
  );
};
