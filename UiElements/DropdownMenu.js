import { Fragment } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import classNames from "classnames";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { CheckIcon, ChevronDownIcon, CogIcon } from "@heroicons/react/solid";

export function DropdownMenu({
  items,
  handleClick,
  className,
  title,
  variant = "dropdown",
  direction = "right",
}) {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-block text-left", className)}
    >
      <div>
        {variant === "dropdown" && (
          <Menu.Button className="inline-flex justify-between w-full rounded-md border border-indigo-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-indigo-700 hover:bg-indigo-50">
            {title}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        )}
        {variant === "threedot" && (
          <Menu.Button className="inline-flex items-center text-indigo-400">
            <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        )}
        {variant === "settings" && (
          <Menu.Button className="text-indigo-400">
            <CogIcon className="h-6 w-6 mt-2" aria-hidden="true" />
          </Menu.Button>
        )}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            {
              "right-0": direction === "right",
              "left-0": direction === "left",
            },
            "z-20 absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
          )}
        >
          <div className="py-1">
            {items?.length > 0 &&
              items.map((item) => (
                <Menu.Item key={item?.id}>
                  {({ active }) => (
                    <a
                      onClick={() => handleClick(item)}
                      className={classNames(
                        active
                          ? "bg-indigo-100 text-indigo-900"
                          : "text-indigo-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      {item?.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
