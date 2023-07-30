import dayjs from "dayjs";
import { useState } from "react";
import { TextInput } from "../../UiElements/Input";
import { properties } from "../../data/db";
import Filters from "./Filters";
import PropertyCard from "./PropertyCard";

const initalFilter = {
  locationId: null,
  date: null,
  price: { min: 0, max: 1000000 },
  propertyTypeId: null,
  searchTerm: "",
};

const filteredResponse = (filter, response) => {
  const sameLocation = (property) => {
    if (filter?.locationId)
      return property?.address?.city?.id === filter.locationId;

    return true;
  };

  const isAvailable = (property) => {
    if (filter?.date) {
      return filter?.date.diff(dayjs(property?.availableFrom)) > 0;
    }

    return true;
  };

  const inBudget = (property) => {
    return (
      property?.rent >= filter?.price?.min &&
      property?.rent <= filter?.price?.max
    );
  };

  const samePropertType = (property) => {
    if (filter?.propertyTypeId)
      return property?.propertyType?.id === filter?.propertyTypeId;

    return true;
  };

  const hasSearchTerm = (property) => {
    console.log(filter);
    if (filter?.searchTerm)
      return (
        property?.name
          ?.toLowerCase()
          .includes(filter.searchTerm.toLowerCase()) ||
        property?.address?.fullAddress
          .toLowerCase()
          .includes(filter.searchTerm.toLowerCase())
      );

    return true;
  };

  return response.filter((property) => {
    if (
      sameLocation(property) &&
      isAvailable(property) &&
      inBudget(property) &&
      samePropertType(property) &&
      hasSearchTerm(property)
    )
      return property;
  });
};

const RentPage = () => {
  const [filter, setFilter] = useState(
    JSON.parse(JSON.stringify(initalFilter))
  );

  const resetFilter = () => {
    setFilter(JSON.parse(JSON.stringify(initalFilter)));
  };

  return (
    <div className="bg-gray-50 p-10 px-32 min-h-screen">
      <div className="flex justify-between items-center mt-6 mb-12">
        <div className="text-3xl text-indigo-800 font-semibold">
          Search Properties to Rent
        </div>
        <TextInput
          autoComplete={"true"}
          placeholder="Search"
          width="w-72"
          value={filter?.searchTerm}
          onChange={(e) => setFilter({ ...filter, searchTerm: e.target.value })}
          type="search"
        />
      </div>
      <Filters filter={filter} setFilter={setFilter} />
      <div className="flex justify-between">
        {filteredResponse(filter, properties).length} results
        {(filter?.locationId ||
          filter?.date ||
          filter?.price?.id ||
          filter?.propertyTypeId ||
          filter?.seachTerm) && (
          <div
            className="text-red-600 bg-red-200 px-2 rounded-md cursor-pointer"
            onClick={resetFilter}
          >
            x reset
          </div>
        )}
      </div>

      {filteredResponse(filter, properties).length > 0 ? (
        <div className="grid grid-cols-3 mt-10 gap-8">
          {filteredResponse(filter, properties).map((property) => (
            <div key={property?.id} className="text-center">
              <PropertyCard details={property} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-indigo-800">
          Sorry, no results.... <br />
          Try removing filters
        </div>
      )}
    </div>
  );
};

export default RentPage;
