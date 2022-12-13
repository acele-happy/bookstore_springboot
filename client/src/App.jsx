import Book from "./components/Book/Book"
import CreateBook from "./components/CreateBook/CreateBook"
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./pages/dashboard/Dashboard"
import {Route, Routes} from 'react-router-dom'
import Cart from "./pages/cart/Cart"
function App() {
  // const [count, setCount] = useState(0)

    return (
      <Routes>
        <Route exact path="/" element={ <Dashboard />}/>
        <Route exact path="/create" element={<CreateBook/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      
    )
}

export default App
