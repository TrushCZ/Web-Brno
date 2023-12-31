import ReactMarkdown from 'react-markdown'

const SinglePage_mainArticle = (props) => {

    return <>
            <div className='singlePageContainer__Left__upperBox'>
                <h1>{props.header}</h1>
                <div className='singlePageContainer__Left__upperBox_categoryBox'>
                    <button>{props.category}</button>
                    <h6>{props.date}</h6>
                </div>
                <img className='singlePageContainer__Left__upperBox__img' src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt="" />
                <p className='singlePageContainer__Left__upperBox__perex'>{props.perex}</p>
            </div>
            <div className='singlePageContainer__Left__textBox'>
            <ReactMarkdown>{props.text}</ReactMarkdown>
                </div>
    </>
}

export default SinglePage_mainArticle