
const GastronomyArticle = (props) => {



    return <div className='gastronomyBox1 gastronomyBox'>
                <img className='inspirationBox_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
                <div className='gastronomyBox1_text gastronomyBox_text'>
                    <h5>{props.header}</h5>
                    <div className='categoryBox'>
                        <button>Gastronomie</button>
                        <h6>{props.date}</h6>
                    </div>
                </div>
           </div>
    
    
   




}

export default GastronomyArticle