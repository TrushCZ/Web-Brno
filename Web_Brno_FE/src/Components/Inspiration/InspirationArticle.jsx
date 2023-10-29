
const GastronomyArticle = (props) => {



    return <div className='inspirationBox1 inspirationBox'>
               <img className='inspirationBox_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
               <div className='inspirationBox1_text inspirationBox_text'>
                   <h5>{props.header}</h5>
                   <div className='categoryBox'>
                       <button>INSPIRACE</button>
                       <h6>{props.date}</h6>
                   </div>
               </div>
          </div>
    
}

export default GastronomyArticle

