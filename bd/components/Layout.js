import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav";

export default function Layout({children}){
    const {data:session} = useSession();
    if(!session){
        return(
            <div className="bg-purple-900 w-screen h-screen flex items-center">
                <div className="text-center w-full">
                    <button onClick={()=>signIn('google')} className="bg-white rounded-lg px-4 p-2">Google Нэвтрэх</button>
                </div>
            </div>
        )
    }
        return (
            <div className="bg-purple-900 min-h-screen flex">
               <Nav/>
              <div className="bg-white flex-grow mt-2 mb-2 mr-2 rounded-lg p-4">
              {children}
              </div>
            </div>
          );
}