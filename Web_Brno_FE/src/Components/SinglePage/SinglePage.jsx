import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import SinglePage_mainArticle from "./SinglePage_mainArticle"
import SinglePage_otherArticleSection from './SinglePage_otherArticleSection'

const SinglePage = () => {

    const{id} = useParams()
    const[data, setData] = useState(null)
    const[category, setCategory] = useState() 
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()

        myData.map(a => {
            if (a.id == id) {
                setData(a)
                setCategory(a.category)
            } 
        })
        setLoad(true)
    }
    
      useEffect(() => {
        loadData()        
      }, [])

    return <>

    {
        !load 
        ?
        <h2>Loading</h2>
        :

    
    <main className='mainSinglePage'>
        <h3>S NÁMI VÁM VE ŠTATLU NIC NEUNIKNE</h3>
        <div className='singlePageContainer'>
            <div className='singlePageContainer__Left'>
                <SinglePage_mainArticle header={data.header} perex={data.perex} text={data.text}  category={data.category} date={data.created_at} img={data.mainImg}  />
                <div className='singlePageContainer__Left__recommendation'>
                    <h2>DALŠÍ Z RUBRIKY</h2>
                        <SinglePage_otherArticleSection category={category}/>
                </div>
            </div>
            <div className='singlePageContainer__Right'>
                <h2>DOPORUČUJEME</h2>
                <div className='singlePageContainer__Right__logo'>
                    
                </div>
                

            </div>
        </div>   
    </main>
}

    </>
}

export default SinglePage