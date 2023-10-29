import { useEffect } from "react"
import { useState } from "react"
import InspirationArticle from "./InspirationArticle"

const InspirationSection = () => {
    const[data, setData ] = useState(null)
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const filteredData = myData.filter(a => {
            return a.category == 'Inspirace'
        })
        const top4articles = filteredData.slice(0,4)
        setData(top4articles)
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
    <div className='titleInspiration' ><h2>INSPIRACE</h2></div>
        <div className='inspirationContainer_greyBackground'>
            <div className='inspirationContainer'>
                <InspirationArticle id={data[0].id} header={data[0].header} img={data[0].mainImg} date={data[0].created_at}/>
                <InspirationArticle id={data[1].id} header={data[1].header} img={data[1].mainImg} date={data[1].created_at}/>
                <InspirationArticle id={data[2].id} header={data[2].header} img={data[2].mainImg} date={data[2].created_at}/>
                <InspirationArticle id={data[3].id} header={data[3].header} img={data[3].mainImg} date={data[3].created_at}/>
                
                <a className='btnNext btnNext_inspiration' href="#"><img src="src/img_general/move-to-the-next-page-symbol-svgrepo-com.svg" alt=""/></a>
            </div>
        </div>
    </>        
}
</> 
}

export default InspirationSection


            
                    
                    
                
                    
                