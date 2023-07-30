import { HeartIcon, SparklesIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

const PropertyCard = ({ details }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden text-left">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={details?.img} alt="" />
      </div>
      <div className=" relative flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500">
            <span className="text-lg text-indigo-600 font-medium">
              ${details?.rent}
            </span>
            /month
          </p>
          <div href={""} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {details?.name}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {details?.address?.fullAddress}
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200">
          <div className="flex pt-4 justify-between text-sm text-gray-600">
            <div className="flex space-x-2 items-center">
              <div className="w-4 h-4 text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zM176 288c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" />
                </svg>
              </div>
              <div className="">{details?.meta?.beds} Beds</div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4 h-4 text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                </svg>
              </div>
              <div className="">{details?.meta?.bathrooms} Bathrooms</div>
            </div>
            <div className="flex space-x-2">
              <div className="w-4 h-4 text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 80H64C55.16 80 48 87.16 48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80z" />
                </svg>
              </div>
              <div className="">{details?.meta?.dimensions?.area} &#13217;</div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 rounded-full p-2 shadow-md border border-gray-200">
          {details?.isLiked ? (
            <HeartIconSolid className={"w-6 h-6 text-indigo-600"} />
          ) : (
            <HeartIcon className={"w-6 h-6 text-indigo-600"} />
          )}
        </div>
        {details?.isPopular && (
          <div className="bg-indigo-600 p-2 absolute -top-4 left-0 rounded-r text-xs text-white">
            <SparklesIcon className="w-3 h-3 inline-block mr-1" /> Popular
          </div>
        )}
      </div>
    </div>
  );
};
export default PropertyCard;
