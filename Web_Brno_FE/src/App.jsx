import FreeTimeSection from "./Components/FreeTime/FreeTimeSection"
import GastronomySection from "./Components/Gastronomy/GastronomySection"
import InspirationSection from "./Components/Inspiration/InspirationSection"
import NewestSection from "./Components/Newest/NewestSection"

const App = () => {

return <> 

<header>
        <div className='header__logo'>
            <h1 className='header__logo__word'>BRNOtoday</h1>
            <img className='header__logo__heart' src='src/img_general/heart.svg' alt=""/>
        </div>
        <nav className='header__navigation'>
            <a href="">AKTUÁLNĚ</a>
            <a href="">GASTRONOMIE</a>
            <a href="">VOLNÝ ČAS</a>
            <a href="">INSPIRACE</a>
            <a href="">SPORT</a>
        </nav>
        <div className='header__buttonBox'>
            <a>NAPIŠTE NÁM</a>
            <a>E-SHOP</a>
        </div>
    </header>
    <main>
        <h3>S NÁMI VÁM VE ŠTATLU NIC NEUNIKNE</h3>
        <div className='container'>

            <NewestSection />
            
            <div className='titleInteresting'>
                <h2>ZAJÍMAVÉ ČLÁNKY</h2>
            </div>
            <div className='interesting_upperBox'>
                <div className='interesting_upperBox_left'>
                    <div className='interesting_upperBox_left_text'>
                        <h2>Již příští víkend proběhne největší kulturně-kreativní festival v ČR – Brno Creative Days!</h2>
                        <p>Jak rozdílnou hudbu je možné řadit pod pojem jazz, ukáže v příštím roce mezinárodní festival JazzFestBrno.</p>
                        <div className='categoryBox'>
                            <button>VOLNÝ ČAS</button>
                            <h6>16.10.2023</h6>
                        </div>
                    </div>
                    <div className='interesting_upperBox_left_img'></div>
                </div>
                <div className='interesting_upperBox_right'>
                    <div className='interesting_upperBox_right_img'></div>
                    <div className='interesting_upperBox_right_text'>
                      <h5>Sedmdesátá sezóna brněnské hvězdárny začíná návštěvnickým rekordem</h5>
                      <div className='categoryBox'>
                        <button>AKTUÁLNĚ</button>
                        <h6>16.10.2023</h6>
                      </div>
                    </div>
                </div>
            </div>
            <div className='interesting_lowerBox'>
                <div className='interesting_lowerBox1'>
                    <div className='interesting_lowerBox1_img interesting_lowerBox_img'></div>
                    <div className='interesting_lowerBox1_text interesting_lowerBox_text'>
                        <h5>Výstava Čerti a peklo v Letohrádku Mitrovských v Brně</h5>
                        <div className='categoryBox'>
                            <button>VOLNÝ ČAS</button>
                            <h6>16.10.2023</h6>
                          </div>
                    </div>
                </div>
                <div className='interesting_lowerBox2'>
                    <div className='interesting_lowerBox2_img interesting_lowerBox_img'></div>
                    <div className='interesting_lowerBox2_text interesting_lowerBox_text'>
                        <h5>Bolek Polívka pokřtil novou sochu u hotelu Barcelo</h5>
                        <div className='categoryBox'>
                            <button>AKTUÁLNĚ</button>
                            <h6>16.10.2023</h6>
                          </div>
                    </div>
                </div>
                <div className='interesting_lowerBox3'>
                    <div className='interesting_lowerBox3_img interesting_lowerBox_img'></div>
                    <div className='interesting_lowerBox3_text interesting_lowerBox_text'>
                        <h5>Nový ročník Nebálu je tady. Letos divočejší a barevnější</h5>
                        <div className='categoryBox'>
                            <button>VOLNÝ ČAS</button>
                            <h6>16.10.2023</h6>
                          </div>
                    </div>
                </div>
            </div>
            
            <InspirationSection />

            <FreeTimeSection />

            <div className='mostReadedTitle'>
                <h2>NEJČTENĚJŠÍ</h2>
            </div>
            <div className='mostReaded_container'>
                <div className='mostReaded_box1 mostReaded_box'>
                    <h1>1</h1>
                    <p>Již příští víkend proběhne největší kulturně-kreativní festival v ČR – Brno Creative Days!</p>
                </div>
                <div className='mostReaded_box2 mostReaded_box'>
                    <h1>2</h1>
                    <p>Sedmdesátá sezóna brněnské hvězdárny začíná návštěvnickým rekordem</p>
                </div>
                <div className='mostReaded_box3 mostReaded_box'>
                    <h1>3</h1>
                    <p>Výstava Čerti a peklo v Letohrádku Mitrovských v Brně</p>
                </div>
                <div className='mostReaded_box4 mostReaded_box'>
                    <h1>4</h1>
                    <p>Bolek Polívka pokřtil novou sochu u hotelu Barcelo</p>
                </div>
                <div className='mostReaded_box5 mostReaded_box'>
                    <h1>5</h1>
                    <p>Nový ročník Nebálu je tady. Letos divočejší a barevnější</p>
                </div>
            </div>

            <GastronomySection />

            <div className='greySpace'></div>
        </div>
    </main>
    <footer>
        <div className='iconBox'>
            <a href="https://www.facebook.com/brno.today" target="_blank"><img src="src/img_general/facebook.svg" href='' alt=""/></a>
            <a href=""><img src="src/img_general/email-envelope-outline-svgrepo-com.svg" alt=""/></a>
            <a href="https://www.instagram.com/brnotoday/" target="_blank"><img src="src/img_general/black-instagram-icon.svg" alt=""/></a>
        </div>
        <p>Copyright &copy 2023 BRNOtoday</p>
    </footer>






{/* END OF BODY */}
</>
}

export default App 