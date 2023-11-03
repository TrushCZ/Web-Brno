import { Link } from "react-router-dom"

const MostReadArtical = (props) => {

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

    return <div className='mostReaded_box1 mostReaded_box'>
                    <h1>{props.number}</h1>
                    <Link to={link} className='headerLink'><p>{props.header}</p></Link>
                </div>
}

export default MostReadArtical