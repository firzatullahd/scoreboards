import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiFootball, BiCalendar } from "react-icons/bi";
import { ImHome } from "react-icons/im";

export default function Footer() {
  return (
    <footer>
      <button>
        <ImHome size="2rem" />
        Home
      </button>
      <button>
        <BiCalendar size="2rem" />
        Calendar
      </button>
      <button>
        <BiFootball size="2rem" />
        Team
      </button>
      <button>
        <CgProfile size="2rem" />
        Profile
      </button>
    </footer>
  );
}
