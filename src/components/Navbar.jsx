import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { BiFootball, BiCalendar } from "react-icons/bi";
import { ImHome } from "react-icons/im";

export default function Navbar() {
  return (
    <nav>
      <div className="desktop">
        <button>
          <ImHome size="2rem" />
        </button>
        <button>
          <BiFootball size="2rem" />
        </button>
      </div>
      <button className="mobile">
        <GiHamburgerMenu size="1.5rem" />
      </button>
      <h1>SCOREBOARD</h1>
      <button className="mobile">
        <FaSearch size="1.5rem" />
      </button>
      <div className="desktop">
        <button>
          <FaSearch size="1.5rem" />
        </button>
        <button>
          <BiCalendar size="2rem" />
        </button>
        <button>
          <CgProfile size="2rem" />
        </button>
      </div>
    </nav>
  );
}
