
const AllArticles_LowerBox = (props) => {

    return  <div className='allArtBoxLowerContainer2__box'>
                <img className='allArtBoxLowerContainer2__box__Img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
                <div className='allArtBoxLowerContainer2__box__Text'>
                    <h5>{props.header}</h5>
                    <p>{props.perex}</p>
                    <div className='categoryBox'>
                        <button>{props.category}</button>
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </div>
}

export default AllArticles_LowerBox