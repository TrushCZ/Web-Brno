import { useState } from "react"
import { useEffect } from "react"
import FreeTimeArticle from "./FreeTimeArticle"


const FreeTimeSection = () => {
    const[data, setData ] = useState(null)
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const filteredData = myData.filter(a => {
            return a.category == 'Volný čas'
        })
        const top3articles = filteredData.slice(0,3)
        setData(top3articles)
        setLoad(true)
    }

      useEffect(() => {
        loadData()        
    },[])

return <>

{
    !load 
    ? 
    <h3>Loading</h3> 
    : 
    <>
    <div className='titleInteresting'><h2>VOLNÝ ČAS</h2></div>
            <div className='freetimeContainer'>
                <FreeTimeArticle id={data[0].id} img={data[0].mainImg} header={data[0].header} date={data[0].created_at} />
                <FreeTimeArticle id={data[1].id} img={data[1].mainImg} header={data[1].header} date={data[1].created_at} />
                <FreeTimeArticle id={data[2].id} img={data[2].mainImg} header={data[2].header} date={data[2].created_at} />
                <a className='btnNext btnNext_freeTime' href="#"><img src="src/img_general/move-to-the-next-page-symbol-svgrepo-com.svg" alt=""/></a>
            </div>
    </>        
}            
</>
}

export default FreeTimeSection