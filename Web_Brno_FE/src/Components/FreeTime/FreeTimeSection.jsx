import { useState } from "react"
import { useEffect } from "react"
import FreeTimeArticle from "./FreeTimeArticle"


const FreeTimeSection = () => {

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
            return a.category == 'Volný čas'
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
    <div className='titleInteresting'><h2>VOLNÝ ČAS</h2></div>
            <div className='freetimeContainer'>
            <img src="src/img_general/move-to-the-next-page-symbol-svgrepo-com.svg" className='btnBack btnNext_freeTime' onClick={clickBackHandler}/>
                <FreeTimeArticle id={data[0].id} img={data[0].mainImg} header={data[0].header} date={data[0].created_at} />
                <FreeTimeArticle id={data[1].id} img={data[1].mainImg} header={data[1].header} date={data[1].created_at} />
                <FreeTimeArticle id={data[2].id} img={data[2].mainImg} header={data[2].header} date={data[2].created_at} />
                <img src="src/img_general/move-to-the-next-page-symbol-svgrepo-com.svg" className='btnNext btnNext_freeTime' onClick = {clickForwardHandler}/>
            </div>
    </>        
}            
</>
}

export default FreeTimeSection