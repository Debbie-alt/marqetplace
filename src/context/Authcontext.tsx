import { useContext, createContext , useState, useEffect } from "react";
import { getApp } from "firebase/app";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";


interface AuthContextType {
  user: User | null
  loading:boolean
}

const AuthContext = createContext<any>({
  user:null,
  loading:false
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user,setUser] = useState<User | null>(null)
    const [loading,setLoading] = useState<boolean>(true)

     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};