
const AllArticles_UpperBox_UpRight = (props) => {

    return  <div className='allArtBoxUpperContainerUp__Right'>
                <img className='allArtBoxUpperContainerUp__Right--Img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
                <div className='allArtBoxUpperContainerUp__Right--Text'>
                    <h5>{props.header}</h5>
                    <div className='categoryBox'>
                        <button>{props.category}</button>
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </div> 
}

export default AllArticles_UpperBox_UpRight