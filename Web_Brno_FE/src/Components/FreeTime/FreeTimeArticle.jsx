
const FreeTimeArticle = (props) => {



return <div className='freetimeBox1 freetimeBox'>
            <img className='freetimeBox_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt="" />
            <div className='freetimeBox1_text freetimeBox_text'>
                <h5>{props.header}</h5>
                <div className='categoryBox'>
                    <button>VOLNÝ ČAS</button>
                    <h6>{props.date}</h6>
                </div>
            </div>
        </div>
}

export default FreeTimeArticle