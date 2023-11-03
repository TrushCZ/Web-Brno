import Header from './Header'
import Footer from './Footer'
import Homepage from './Components/Homepage'
import AllArticlesOfCategory from './Components/AllArticlesOfCategoryPage/AllArticlesOfCategorySection'
import SinglePage from './Components/SinglePage/SinglePage'
import SinglePage2 from './Components/SinglePage2/SinglePage2'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

return <BrowserRouter>

           <Header />

           <Routes>

               <Route path='/' element={<Homepage/>} />  

               <Route path='/:category' element={<AllArticlesOfCategory/>} />

               <Route path='/:category/:singlepage/:id' element={<SinglePage/>} />

               <Route path='/:category/:singlepage/:id/:id' element={<SinglePage2/>} />

           </Routes>

           <Footer />
           
       </BrowserRouter>

}

export default App 