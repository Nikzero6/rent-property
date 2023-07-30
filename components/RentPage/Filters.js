import { PrimaryButton } from "../../UiElements/Button";
import MultiSelect from "../../UiElements/MultiSelect";
import MuiDatePicker from "../../UiElements/MuiDatePicker";
import { filters } from "../../data/db";
import { useState } from "react";
import { DropdownMenu } from "../../UiElements/DropdownMenu";

const Filters = ({ filter, setFilter }) => {
  const [location, setLocation] = useState();
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState({
    id: 0,
    name: "Select Price Range",
    min: 0,
    max: 1000000,
  });
  const [propertyType, setPropertyType] = useState({
    id: 0,
    name: "Select Property Type",
  });

  const handleFilter = () => {
    const updatedFilter = JSON.parse(JSON.stringify(filter));
    if (location) updatedFilter.locationId = location?.id;
    if (date) updatedFilter.date = date;
    if (price?.id) updatedFilter.price = price;
    if (propertyType?.id) updatedFilter.propertyTypeId = propertyType?.id;
    setFilter(updatedFilter);
  };

  const renderFilter = (filter) => {
    if (filter?.type === "location") {
      return (
        <div className="mt-2 text-sm w-48">
          <MultiSelect
            options={filter?.options}
            labelField="name"
            valueField="id"
            placeholder={"start typing..."}
            defaultValue={location}
            onChange={setLocation}
          />
        </div>
      );
    } else if (filter?.type === "date") {
      return (
        <div className="mt-2 text-sm w-52">
          <MuiDatePicker
            label="Select Move-in Date"
            value={date}
            setValue={setDate}
            disablePast={true}
          />
        </div>
      );
    } else if (filter?.type === "price") {
      return (
        <div className="mt-2 text-sm">
          <DropdownMenu
            items={filter?.options}
            title={price?.name}
            handleClick={setPrice}
            className="w-48"
          />
        </div>
      );
    } else if (filter?.type === "property_type") {
      return (
        <div className="mt-2 text-sm">
          <DropdownMenu
            items={filter?.options}
            title={propertyType?.name}
            handleClick={setPropertyType}
            className="w-52"
          />
        </div>
      );
    } else return null;
  };

  return (
    <div className="bg-white shadow-md rounded-md my-6 p-6 sticky top-2 z-10">
      <div className="flex divide-x divide-gray-300">
        {filters.map((filter, index) => (
          <div key={index} className="px-6">
            <div className="text-sm text-gray-500 capitalize font-medium">
              {filter?.display_name}
            </div>
            {renderFilter(filter)}
          </div>
        ))}
        <div className="justify-center flex items-center w-full">
          <PrimaryButton className="px-8" onClick={handleFilter}>
            Search
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Filters;
