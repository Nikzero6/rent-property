import Select from "react-select";

const customStyles = {
  option: (provided, state) => {
    return {
      ...provided,
      color: state.isSelected ? "#212121" : "#616161",
      backgroundColor: state.isFocused ? "#f5f5f5" : "#fff",
      fontSize: "0.875rem",
    };
  },
  control: (provided, state) => {
    return {
      ...provided,
      borderColor: state.isFocused
        ? "#6b7280 !important"
        : "#d1d5db !important",
      boxShadow: state.isFocused ? "0 0 0 1px #6b7280 !important" : "",
      color: "#212121",
      fontSize: "0.875rem",
    };
  },
  container: (provided, state) => {
    return {
      ...provided,
      boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 #0000000d",
    };
  },
};

const MultiSelect = ({
  isMulti = false,
  closeMenuOnSelect = true,
  options,
  placeholder,
  onChange,
  defaultValue,
  labelField = "label",
  valueField = "value",
  maxMenuHeight = null,
  disabled = false,
}) => {
  return (
    <Select
      isMulti={isMulti}
      options={options}
      closeMenuOnSelect={closeMenuOnSelect}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      styles={customStyles}
      className="no-input-border"
      getOptionLabel={(option) => option[labelField]}
      getOptionValue={(option) => option[valueField]}
      maxMenuHeight={maxMenuHeight}
      isDisabled={disabled}
    />
  );
};

export default MultiSelect;
