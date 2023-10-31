import Header from '../Header'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import AllArticles_LowerBox from './AllArticles_LowerBox'
import AllArticles_UpperBox_Down from './AllArticles_UpperBox_Down'
import AllArticles_UpperBox_UpLeft from './AllArticles_UpperBox_UpLeft'
import AllArticles_UpperBox_UpRight from './AllArticles_UpperBox_UpRight'
import MostReadedSection from '../MostRead/MostReadSection'

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

    // Getting data from DB

    let Category

    if(category === 'gastronomie') {
        Category = 'Gastronomie'
    } else if (category === 'volnycas') {
        Category = 'Volný čas'
    } else if (category === 'inspirace') {
        Category = 'Inspirace'
    } else if (category === 'sport') {
        Category = 'Sport'
    }

    const[data, setData] = useState(null)
    const[data1, setData1] = useState(null)
    const[data2, setData2] = useState(null)
    const[data3, setData3] = useState(null)
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const filteredData = myData.filter(a => {
            if(a.category == Category){
                return a
            }
        })
        
        const ArticleUpLeft = filteredData.slice(0,1)
        const ArticleUpRight = filteredData.slice(1,2)
        const ArticlesMiddle = filteredData.slice(2,5)
        const ArticlesLower = filteredData.slice(5,11)

        setData(ArticleUpLeft)
        setData1(ArticleUpRight)
        setData2(ArticlesMiddle)
        setData3(ArticlesLower)
        setLoad(true)
    }

    useEffect(() => {
        loadData()
    },[category])


    return <> 

    <Header />

    {
        !load
        ?
        <h2>Loading</h2>
        :
        <main className='AllArtBox_main'>
        <h3>{mainHeader}</h3>
        <div className='allArtBox_greySpace'></div>
        <div className='AllArtBox_container'>
            <div className='allArtBoxUpperContainer'>
                <div className='allArtBoxUpperContainerUp'>
                    <AllArticles_UpperBox_UpLeft id={data[0].id} header={data[0].header} perex={data[0].perex} category={data[0].category} date={data[0].created_at} img={data[0].mainImg} />
                    <AllArticles_UpperBox_UpRight id={data1[0].id} header={data1[0].header} category={data1[0].category} date={data1[0].created_at} img={data1[0].mainImg}/> 
                </div>  
                <div className='allArtBoxUpperContainerDown'>
                <AllArticles_UpperBox_Down id={data2[0].id} header={data2[0].header} category={data2[0].category} date={data2[0].created_at} img={data2[0].mainImg} />
                <AllArticles_UpperBox_Down id={data2[1].id} header={data2[1].header} category={data2[1].category} date={data2[1].created_at} img={data2[1].mainImg} />
                <AllArticles_UpperBox_Down id={data2[1].id} header={data2[2].header} category={data2[2].category} date={data2[2].created_at} img={data2[2].mainImg} />
                
                </div>  
            </div>
          
        <div className='allArtBoxUpperContainer_mostRead'>
        <MostReadedSection />
        </div>
        <div className='allArtBox__title'>
            <h2>Další články</h2>
        </div>
        <div className='allArtBoxLowerContainer1'>
            <div className='allArtBoxLowerContainer2'>
                <AllArticles_LowerBox id={data3[0].id} header={data3[0].header} perex={data3[0].perex} category={data3[0].category} date={data3[0].created_at} img={data3[0].mainImg}/>
                <AllArticles_LowerBox id={data3[1].id} header={data3[1].header} perex={data3[1].perex} category={data3[1].category} date={data3[1].created_at} img={data3[1].mainImg}/>
                <AllArticles_LowerBox id={data3[2].id} header={data3[2].header} perex={data3[2].perex} category={data3[2].category} date={data3[2].created_at} img={data3[2].mainImg}/>
                <AllArticles_LowerBox id={data3[3].id} header={data3[3].header} perex={data3[3].perex} category={data3[3].category} date={data3[3].created_at} img={data3[3].mainImg}/>
                <AllArticles_LowerBox id={data3[4].id} header={data3[4].header} perex={data3[4].perex} category={data3[4].category} date={data3[4].created_at} img={data3[4].mainImg}/>
                <AllArticles_LowerBox id={data3[5].id} header={data3[5].header} perex={data3[5].perex} category={data3[5].category} date={data3[5].created_at} img={data3[5].mainImg}/>
            </div>  
        </div>
        </div>
    </main>

    }
    <Footer />
</>

}

export default AllArticlesOfCategory