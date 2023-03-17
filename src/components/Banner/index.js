// import bannerImage from '../../../public/assets/banner-image.jpg'
import './styles.css'
 const Banner = () => {

    return(

        <div className="container-fluid">
            <div className='image-container'>
            <img className="img-fluid banner-image" src={process.env.PUBLIC_URL + '/assets/banner-image.jpg'} alt="banner-image"/>
            </div>
        </div>
    )
}

export default Banner;