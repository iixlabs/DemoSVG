import React from "react";

const SvgBell2 = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="bell2_svg__a"
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
      />
    </defs>
    <use fillRule="evenodd" xlinkHref="#bell2_svg__a" />
  </svg>
);

export default SvgBell2;
