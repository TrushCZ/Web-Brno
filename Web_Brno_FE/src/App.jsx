import Homepage from './Components/Homepage'
import AllArticlesOfCategory from './Components/AllArticlesOfCategoryPage/AllArticlesOfCategorySection'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

return <BrowserRouter>

           <Routes>

               <Route path='/' element={<Homepage/>} />  

               <Route path='/:category' element={<AllArticlesOfCategory/>} />

           </Routes>

       </BrowserRouter>

}

export default App 