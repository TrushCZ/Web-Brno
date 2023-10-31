
const AllArticles_UpperBox_UpLeft = (props) => {

    return  <div className='allArtBoxUpperContainerUp__Left'>
                <div className='allArtBoxUpperContainerUp__Left--Text'>
                    <h2>{props.header}</h2>
                    <p>{props.perex}</p>
                    <div className='categoryBox'>
                        <button>{props.category}</button>
                        <h6>{props.date}</h6>
                    </div>
                </div>
                <img className='allArtBoxUpperContainerUp__Left--Img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
            </div>
}

export default AllArticles_UpperBox_UpLeft

