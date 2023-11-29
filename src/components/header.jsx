import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  Avatar,
} from "@nextui-org/react";

export const Header = () => {
  return (
    <header>
      <Navbar className=" bg-orange-600 ">
        <NavbarBrand as="div">
          <p className="font-semibold text-inherit text-lg text-white">
            Eventboom!
          </p>
        </NavbarBrand>

        <NavbarContent as="div" justify="end">
          <NavbarItem isActive>
            <Link
              href="/find"
              aria-current="page"
              className="text-white text-xl"
            >
              Find Events
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-gray-100 font-light text-xl" href="/create">
              Create Events
            </Link>
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <Avatar
              className="transition-transform"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </header>
  );
};
