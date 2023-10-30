import { useState } from "react"
import { useEffect } from "react"
import InterestingArticleUpperboxLeft from './InterestingArticleUpperboxLeft'
import InterestingArticleUpperboxRight from './InterestingArticleUpperboxRight'
import InterestingArticleLowerbox from './InterestingArticleLowerbox'

const InterestingSection = () => {

    const[data1, setData1] = useState(null)
    const[data2, setData2] = useState(null)
    const[data3, setData3] = useState(null)
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const filteredData = myData.filter(a => {
            return a.interesting == 'Ano'
        })

        const BigArticalLeft = filteredData.slice(0,1)
        const BigArticalRight = filteredData.slice(1,2)
        const lowArticals = filteredData.slice(2,5)
        
        setData1(BigArticalLeft)
        setData2(BigArticalRight)
        setData3(lowArticals)
        setLoad(true)
    }

    useEffect(() => {
        loadData()
    }, [])

    return <>
        
    {
        !load
        ?
        <h3>Loading</h3>
        :
        <> 
            <div className='titleInteresting'><h2>ZAJÍMAVÉ ČLÁNKY</h2></div>
        
            <div className='interesting_upperBox'>
                <InterestingArticleUpperboxLeft id={data1[0].id} header={data1[0].header} perex={data1[0].perex} img={data1[0].mainImg} date={data1[0].created_at} category={data1[0].category} />
                <InterestingArticleUpperboxRight id={data2[0].id} header={data2[0].header} img={data2[0].mainImg} date={data2[0].created_at} category={data2[0].category}/>
            </div>
            <div className='interesting_lowerBox'>
            <InterestingArticleLowerbox id={data3[0].id} header={data3[0].header} img={data3[0].mainImg} date={data3[0].created_at} category={data3[0].category}/>
            <InterestingArticleLowerbox id={data3[1].id} header={data3[1].header} img={data3[1].mainImg} date={data3[1].created_at} category={data3[1].category}/>
            <InterestingArticleLowerbox id={data3[2].id} header={data3[2].header} img={data3[2].mainImg} date={data3[2].created_at} category={data3[2].category}/>
            </div>
        </>    
}
</>       
}

export default InterestingSection