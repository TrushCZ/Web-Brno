
const InterestingArticleUpperboxLeft = (props) => {


    return  <div className='interesting_upperBox_left'>
                <div className='interesting_upperBox_left_text'>
                    <h2>{props.header}</h2>
                    <p>{props.perex}</p>
                    <div className='categoryBox'>
                        <button>{props.category}</button>
                        <h6>{props.date}</h6>
                    </div>
                </div>
                <img className='interesting_upperBox_left_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
            </div>
}

export default InterestingArticleUpperboxLeft