import { useEffect } from "react"
import { useState } from "react"
import GastronomyArticle from "./GastronomyArticle"

const GastronomySection = () => {

    const[filteredData, setFilteredData] = useState()
    const[data, setData ] = useState(null)
    const[load, setLoad] = useState(false)

    let[index0, setIndex0] = useState(0)
    let[index1, setIndex1] = useState(1)
    let[index2, setIndex2] = useState(2)
    let[index3, setIndex3] = useState(3)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const filteredData = myData.filter(a => {
            return a.category == 'Gastronomie'
        })
        setFilteredData(filteredData)

         let top4articles = []
        top4articles[0] = filteredData[index0]
        top4articles[1] = filteredData[index1]
        top4articles[2] = filteredData[index2]
        top4articles[3] = filteredData[index3]
        setData(top4articles)

        setLoad(true)
    }

      useEffect(() => {
        loadData()        
    },[index0])

    // Moving gallery - forward
       
        const clickForwardHandler = () => {
            if (index0 == filteredData.length-4) {
                setIndex0(filteredData.length - 3)
                setIndex1(filteredData.length - 2)
                setIndex2(filteredData.length - 1)
                setIndex3(0)
            } else if (index0 == filteredData.length-3) {
                setIndex0(filteredData.length - 2)
                setIndex1(filteredData.length - 1)
                setIndex2(0)
                setIndex3(1)
            } else if (index0 == filteredData.length-2) {
                setIndex0(filteredData.length - 1)
                setIndex1(0)
                setIndex2(1)
                setIndex3(2)
            } else if (index0 == filteredData.length-1) {
                setIndex0(0)
                setIndex1(1)
                setIndex2(2)
                setIndex3(3)
            } else if (index0 >= 0 ) {
                setIndex0(index0++)
                setIndex1(index1++)
                setIndex2(index2++)
                setIndex3(index3++)
            }
        }

    // Moving gallery - back

    const clickBackHandler = () => {
        if (index0 == 0) {
            setIndex0(filteredData.length-1)
            setIndex1(0)
            setIndex2(1)
            setIndex3(2)
        } else if (index0 == filteredData.length-1) {
            setIndex0(filteredData.length-2)
            setIndex1(filteredData.length-1)
            setIndex2(0)
            setIndex3(1)
        } else if (index0 == filteredData.length-2) {
            setIndex0(filteredData.length-3)
            setIndex1(filteredData.length-2)
            setIndex2(filteredData.length-1)
            setIndex3(0)
        } else if (index0 == filteredData.length-3) {
            setIndex0(filteredData.length-4)
            setIndex1(filteredData.length-3)
            setIndex2(filteredData.length-2)
            setIndex3(filteredData.length-1)
        } else if (index0 <= filteredData.length-4) {
            setIndex0(index0--)
            setIndex1(index1--)
            setIndex2(index2--)
            setIndex3(index3--)
        }     
    }

return <>

{

    !load 
    ? 
    <h3>Loading</h3> 
    : 
    <>
    <div className='titleGastronomy' ><h2>GASTRONOMIE</h2></div>
        <div className='gastronomyContainer_greyBackground'>
            <div className='gastronomyContainer'>
                <img src="src/img_general/move-to-the-next-page-symbol-svgrepo-com.svg" className='btnBack btnNext_gastronomy' onClick={clickBackHandler}/>
                <GastronomyArticle id={data[0].id} header={data[0].header} img={data[0].mainImg} date={data[0].created_at}/>
                <GastronomyArticle id={data[1].id} header={data[1].header} img={data[1].mainImg} date={data[1].created_at}/>
                <GastronomyArticle id={data[2].id} header={data[2].header} img={data[2].mainImg} date={data[2].created_at}/>
                <GastronomyArticle id={data[3].id} header={data[3].header} img={data[3].mainImg} date={data[3].created_at}/>
                <img src="src/img_general/move-to-the-next-page-symbol-svgrepo-com.svg" className='btnNext btnNext_gastronomy' onClick = {clickForwardHandler}/>
            </div>
        </div>
    </>        
}
</> 
}

export default GastronomySection