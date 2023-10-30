
const InterestingArticleUpperboxRight = (props) => {


    return  <div className='interesting_upperBox_right'>
                <img className='interesting_upperBox_right_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
                <div className='interesting_upperBox_right_text'>
                    <h5>{props.header}</h5>
                    <div className='categoryBox'>
                        <button>{props.category}</button>
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </div>
            
}

export default InterestingArticleUpperboxRight