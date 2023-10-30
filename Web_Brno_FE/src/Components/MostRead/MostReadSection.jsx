import { useState } from "react"
import { useEffect } from "react"
import MostReadArtical from './MostReadArtical'


const MostReadedSection = () => {
    const[data, setData] = useState(null)
    const[load, setLoad] = useState(false)

    const loadData = async() => {
        const promise = await fetch('http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/src/API.php')
        const myData = await promise.json()
        const filteredData = myData.filter(a => {
            return a.interesting == 'Ano'
        })
        const top5articals = filteredData.slice(0,5)
        setData(top5articals)
        setLoad(true)
    }

    useEffect(() => {
        loadData()
    }, [])

    // Numbering of the most read articles
    const numbering = [1,2,3,4,5]

    return <> 

    {
        !load
        ?
        <h3>Loading</h3>
        :
        <>
            <div className='mostReadedTitle'><h2>NEJČTENĚJŠÍ</h2></div>
            <div className='mostReaded_container'>
                <MostReadArtical id={data[0].id} header={data[0].header} number={numbering[0]}/>
                <MostReadArtical id={data[1].id} header={data[1].header} number={numbering[1]}/>
                <MostReadArtical id={data[2].id} header={data[2].header} number={numbering[2]}/>
                <MostReadArtical id={data[3].id} header={data[3].header} number={numbering[3]}/>
                <MostReadArtical id={data[4].id} header={data[4].header} number={numbering[4]}/>
            </div>
        </>

    }   
    </>
}

export default MostReadedSection