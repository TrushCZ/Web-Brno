import { Link } from "react-router-dom"

const AllArticles_UpperBox_UpLeft = (props) => {

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

    return  <div className='allArtBoxUpperContainerUp__Left'>
                <div className='allArtBoxUpperContainerUp__Left--Text'>
                    <Link to={link} className='headerLink'><h2>{props.header}</h2></Link>
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

