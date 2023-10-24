import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"
import { Children } from "react";

export default function Layout({children}) {
  const {data: session} = useSession();
  if(!session){
    return (
      <div className="bg-purple-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
      <button onClick={()=> signIn('google')} className="bg-white p-2 px-4 rounded-lg">Google-ээр нэвтрэх</button>
      </div>
    </div>
    );
  }
  return (
    <div className="bg-purple-900 min-h-screen flex">
       <Nav />
      <div className="bg-white flex-grow mt-2 mb-2 mr-2 rounded-lg p-4">
      {children}
      </div>
    </div>
  );
}