import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar(){
    const {dark, setDark} = useContext(ThemeContext);
    return(
       <nav className="flex justify-between p-5">
       
        <button onClick={() => setDark(!dark)}
        className="px-4 py-2 border rounded"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
    );
}