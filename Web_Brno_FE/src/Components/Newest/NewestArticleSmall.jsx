
const NewestArticleSmall = (props) => {


    return  <div className='newestArticles_smallBox_first'>
                <img className='newestArticles_smallBox_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
                <h5>{props.header}</h5>
                <div className='categoryBox'>
                    <button>{props.category}</button>
                    <h6>{props.date}</h6>
                </div>
            </div>



}

export default NewestArticleSmall