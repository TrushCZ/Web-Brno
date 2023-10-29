import { useState } from "react"
import { useEffect } from "react"
import NewestArticleBiggest  from './NewestArticleBiggest'
import NewestArticleSmall from './NewestArticleSmall'


const NewestSection = () => {

    const[data1, setData1 ] = useState(null)
    const[data2, setData2] = useState(null)
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const biggestArticles = myData.slice(0,1)
        const smallArticles = myData.slice(1,5)
        setData1(biggestArticles)
        setData2(smallArticles)
        setLoad(true)
    }

      useEffect(() => {
        loadData()        
    },[])

    console.log(data1);
    console.log(data2);

    return <>

{

    !load 
    ? 
    <h3>Loading</h3> 
    : 
    <>
    <div className='container_greyBackground'>

            <NewestArticleBiggest id={data1[0].id} header={data1[0].header} perex={data1[0].perex} img={data1[0].mainImg} category={data1[0].category} date={data1[0].created_at}/>
           
            <div className='newestArticles_smallBox'>
                
                <NewestArticleSmall id={data2[0].id} header={data2[0].header} img={data2[0].mainImg} category={data2[0].category} date={data2[0].created_at} />
                <NewestArticleSmall id={data2[1].id} header={data2[1].header} img={data2[1].mainImg} category={data2[1].category} date={data2[1].created_at} />
                <NewestArticleSmall id={data2[2].id} header={data2[2].header} img={data2[2].mainImg} category={data2[2].category} date={data2[2].created_at} />
                <NewestArticleSmall id={data2[3].id} header={data2[3].header} img={data2[3].mainImg} category={data2[3].category} date={data2[3].created_at} />

            </div>
          </div>
    
    </>        
}
</> 

}

export default NewestSection