import { Link } from "react-router-dom"
import SearchOrder from "../features/orders/SearchOrder"
import Username from "../features/user/Username"


const Header = () => {
  return (
   <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-500 sm:px-6 flex items-center justify-between ">
    <Link to='/' className="tracking-widest" >
        Pizza Shop
    </Link>
    <SearchOrder />
    <Username />
   </header>
  )
}

export default Header