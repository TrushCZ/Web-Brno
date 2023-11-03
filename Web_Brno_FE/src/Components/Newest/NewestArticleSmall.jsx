import { Link } from "react-router-dom"

const NewestArticleSmall = (props) => {

    // Preparation of link

    let category = props.category
    let header = props.header
    let id = props.id

    let formedcategory

    if (category == 'Gastronomie') {
        formedcategory = 'gastronomie'
    } else if (category == 'Volný čas') {
        formedcategory = 'volnycas'
    } else if (category == 'Inspirace') {
        formedcategory = 'inspirace'
    } else if (category == 'Sport') {
        formedcategory = 'sport'
    }
    
    let formedheader = header.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-').replace(/,/g, "").replace(/\?\s*/g, '').toLowerCase()
    
    const link = `/${formedcategory}/${formedheader}/${id}`

    return  <div className='newestArticles_smallBox_first'>
                <img className='newestArticles_smallBox_img'src={`http://www.cbp-exercises.test/BrnoToday_web%20/Web_Brno/Web_Brno_BE/img_load/${props.img}`} alt=""/>
                <Link to={link} className='headerLink'><h5>{props.header}</h5></Link>
                <div className='categoryBox'>
                    <button>{props.category}</button>
                    <h6>{props.date}</h6>
                </div>
            </div>
}

export default NewestArticleSmall