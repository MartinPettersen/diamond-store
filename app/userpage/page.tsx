import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import Link from "next/link";

const UserPage = async () => {
  const session = await getServerSession(options)

  if(!session){
    redirect("/api/auth/signin?callbackUrl=/userpage")
  }

  return (
    <div className="w-[100%] h-screen flex items-center justify-center flex-col gap-4">
      <div className="flex flex-row gap-2">Velkommen <div className="text-blue-500">{session?.user?.email}</div></div>
      <div className="bg-orange-400 text-orange-100 p-4">
      <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
      </div>
    </div>
  )
}

export default UserPage