"use client";
import React from 'react'
import { useState } from 'react';
import Link from "next/link";


const SuperAdmin = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="w-64 bg-red-800 text-white h-screen p-4 space-y-2 fixed top-[65px] left-0 z-20">
      {/* User Management */}
      <div>
        <button
          onClick={() => toggleDropdown("user")}
          className="w-full text-left py-2 px-3 hover:bg-amber-700 rounded"
        >
          User Management
        </button>
        {openDropdown === "user" && (
          <div className="pl-4 space-y-1">
            <Link href="/superadmin/users/usercreation">
            <button className="block w-full text-left hover:bg-amber-700 px-3 py-1 rounded">Create User</button>
            </Link>
            <Link href="/superadmin/users/userlist">
            <button className="block w-full text-left hover:bg-amber-700 px-3 py-1 rounded">User List</button>
            </Link>
          </div>
        )}
      </div>

      {/* Configuration */}
      {/* <div>
        <button
          onClick={() => toggleDropdown("config")}
          className="w-full text-left py-2 px-3 hover:bg-amber-700 rounded"
        >
          Configuration
        </button>
        {openDropdown === "config" && (
          <div className="pl-4 space-y-1">
            <button className="block w-full text-left hover:bg-amber-700 px-3 py-1 rounded">Checklist Configuration</button>
          </div>
        )}
      </div>
      {/* <div>
        <button
          onClick={() => toggleDropdown("entity")}
          className="w-full text-left py-2 px-3 hover:bg-amber-700 rounded"
        >
          User
        </button>
        {openDropdown === "entity" && (
          <div className="pl-4 space-y-1">
            <button className="block w-full text-left hover:bg-amber-700 px-3 py-1 rounded">User List</button>
            <button className="block w-full text-left hover:bg-amber-700 px-3 py-1 rounded">Create User</button>
          </div>
        )}
      </div> */}
    </div> 
  );
};

export default SuperAdmin 
