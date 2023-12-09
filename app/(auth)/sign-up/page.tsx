import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../public/google.svg";
import Image from "next/image";
import GithubSignInButton from "@/app/components/GithubSignInBtn";
import GoogleSignInButton from "@/app/components/GoogleSignInBtn";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
export default async function Signup() {

  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <h1 className="font-3xl font-semibold">Sign Up</h1>

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
        Already have a Account?
        <Link className="text-white hover:underline mx-1" href="/login">
          Login in now
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}
