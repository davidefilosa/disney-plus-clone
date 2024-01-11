import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import SearchInput from "./search-input";
import GenreDropdown from "./genre-dropdown";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-20 w-full flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10 text-3xl">
        Disney+
      </Link>
      <div className="flex gap-x-2">
        <GenreDropdown />
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
