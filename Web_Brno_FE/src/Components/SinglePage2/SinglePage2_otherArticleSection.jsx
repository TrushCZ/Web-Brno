import SinglePage2_otherArticles from './SinglePage2_otherArticles'
import { useState, useEffect } from 'react'

const SinglePage2_otherArticleSection = (props) => {

    let category = props.category
    
    const[data, setData] = useState()
    const[load, setLoad] = useState(false)

    // Random order in array function
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        
        const filteredData = myData.filter(a => {
            if (a.category == category) {
                return a
            }
        }) 
        const myShuffledArray = shuffleArray(filteredData)
        setData(myShuffledArray)
        setLoad(true)
    }
 
    useEffect(() => {
        loadData()
    }, [])

    return  <>

    {
        !load
        ?
        <h5>Loading</h5>
        :
        <>
        <div className='singlePageContainer__Left__recommendation_box'>
            <SinglePage2_otherArticles header={data[0].header} img={data[0].mainImg} id={data[0].id} category={data[0].category} date={data[0].created_at}/>
            <SinglePage2_otherArticles header={data[1].header} img={data[1].mainImg} id={data[1].id} category={data[1].category} date={data[1].created_at}/>
            <SinglePage2_otherArticles header={data[2].header} img={data[2].mainImg} id={data[2].id} category={data[2].category} date={data[2].created_at}/>
        </div>
        </>
    }       
    </>

}

export default SinglePage2_otherArticleSection