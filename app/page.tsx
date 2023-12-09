import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/auth"
import { redirect } from 'next/navigation';
export default async function Home() {
  const session = await getServerSession(authOptions);

  if(!session){
    return redirect("/login")
  }else{
    return redirect("/home")
  }
}
