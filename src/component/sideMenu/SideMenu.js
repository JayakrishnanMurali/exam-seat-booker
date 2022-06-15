import React from "react";
import Link from "next/link";
export const SideMenu = () => {
  return (
    <div className="bg-gray-500 h-screen p-4">
      <h2 className="text-2xl font-semibold mt-4 text-center text-gray-100">
        Exam Seat Menu
      </h2>

      <div className="mt-12 gap-4 flex flex-col">
        <Link href="/">
          <h4
            className="bg-gray-50 p-2 cursor-pointer rounded-md text-lg shadow-sm
          hover:bg-slate-200 transition-colors ease-in-out delay-100"
          >
            HOME
          </h4>
        </Link>
        <h4 className="bg-gray-50 p-2 cursor-pointer rounded-md text-lg shadow-sm hover:bg-slate-200 transition-colors ease-in-out delay-100">
          PROFILE
        </h4>
        <h4 className="bg-gray-50 p-2 cursor-pointer rounded-md text-lg shadow-sm hover:bg-slate-200 transition-colors ease-in-out delay-100">
          SETTINGS
        </h4>
      </div>
    </div>
  );
};
