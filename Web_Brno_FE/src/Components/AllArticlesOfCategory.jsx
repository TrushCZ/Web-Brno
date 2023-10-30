import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import AllArticlesOfCategoryArticle from './AllArticlesOfCategoryArticle'

const AllArticlesOfCategory = () => {

    const{category} = useParams()

    // Main header
    let mainHeader

    if(category === 'gastronomie') {
        mainHeader = 'GASTRONOMIE'
    } else if (category === 'volnycas') {
        mainHeader = 'VOLNÝ ČAS'
    } else if (category === 'inspirace') {
        mainHeader = 'INSPIRACE'
    } else if (category === 'sport') {
        mainHeader = 'SPORT'
    }

    return <> 

    <Header />

    <main class='AllArtBox_main'>
        <h3>{mainHeader}</h3>
        <div class='allArtBox_greySpace'></div>
        <div className='container AllArtBox_container'>
            <div class='allArtBoxContainer'>
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
                <AllArticlesOfCategoryArticle />
            </div>
        </div>
    </main>

    <Footer />

</>







}

export default AllArticlesOfCategory