"use client";
import React from "react";
import { useState } from "react";
import crown from "@/public/crown_logo.png";
import User from "@/public/user_image.png";
import dot from "@/public/three_dot.png";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

function NavBar() {
 const router = useRouter();
  const movetologout = () => {
   router.push("/login/loginpage");
  };
  const [username,] = useState("Jismy");
  return (
    <nav className="bg-amber-500 sticky top-0 z-10">
      <div className="w-full flex justify-between items-center h-[65px] px-4">
        <div>
          <Image
            src={crown}
            alt="Crown"
            className="w-[146px] h-[45px] cursor-pointer"
          />
        </div>
        <div>
          <div className="mr-[8px] flex gap-2 mr-[8px]">
            {username ? (
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-amber-200 text-white text-[16px] font-medium">
                <h1 className="text-blue-dark text-lg font-semibold">
                  {" "}
                  {username
                    .split(" ") // Split the username into words
                    .map((word) => word.charAt(0).toUpperCase()) // Take the first letter of each word
                    .join("") // Join the initials
                    .slice(0, 2)}{" "}
                  {/* Ensure only two initials are shown */}
                </h1>
              </div>
            ) : (
              <Image
                src={User}
                alt="User image"
                className="w-[40px] h-[40px]"
              />
            )}
            <div className="text-white font-medium  pt-2.5">{username}</div>
            <div>
              <AlertDialog>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Image src={dot} alt="Action" className="cursor-pointer w-[20px] h-[23px] mr-7 mt-3 " />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Change Password</DropdownMenuItem>

                    {/* Move only trigger inside menu */}
                    <DropdownMenuItem asChild>
                      <AlertDialogTrigger asChild>
                        <span className="cursor-pointer w-full">Log Out</span>
                      </AlertDialogTrigger>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Dialog content outside dropdown */}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to log out?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will redirect to your
                      login page.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={movetologout}>Log Out</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;