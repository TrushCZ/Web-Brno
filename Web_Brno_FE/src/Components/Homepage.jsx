import FreeTimeSection from "./FreeTime/FreeTimeSection"
import GastronomySection from "./Gastronomy/GastronomySection"
import InspirationSection from "./Inspiration/InspirationSection"
import NewestSection from "./Newest/NewestSection"
import InterestingSection from './Interesting/InterestingSection'
import MostReadSection from './MostRead/MostReadSection'

const Homepage = () => {



    return <> 

   

    <main>
        <h3>S NÁMI VÁM VE ŠTATLU NIC NEUNIKNE</h3>
        <div className='container'>

            <NewestSection />

            <InterestingSection />
            
            <InspirationSection />

            <FreeTimeSection />

            <MostReadSection />

            <GastronomySection />

            <div className='greySpace'></div>
        </div>
    </main>


</>

}

export default Homepage