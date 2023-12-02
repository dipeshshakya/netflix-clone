import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../public/google.svg"
import Image from "next/image";
export default function Login() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <h1 className="font-3xl font-semibold">Login</h1>

      <form action="">
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="bg-[#333] placeholder:text-xs placeholder:text-grey-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Login
          </Button>
        </div>
      </form>
      <div className="text-sm text-gray-500 mt-2">
        Create a New Account?
        <Link className="text-white hover:underline" href="/sign-up">
          Sign Up
        </Link>
      </div>
      <div className="flex w-full justify-center items-centergap-x-3 mt-6">
        <Button variant="outline" size="icon">
            <GithubIcon className="w-4 h-4"/>
        </Button>
        <Button variant="outline" size="icon">
            <Image src={GoogleIcon} alt="google icon" className="w-6 h-6"/>
        </Button>
      </div>
    </div>
  );
}
