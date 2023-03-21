const starRating = rating =>{
    let parsedRating = parseFloat(rating);

    const starIcons = val =>{
        let stars = [];

        switch(Number.isInteger(val)){
            case true:
                for(let i = 0; i < val; i++){
                    stars.push(<svg key={i} viewBox="0 0 77.2 73.9" width="20" height="20" style={{fill:"#E28807"}}>
                    <path d="M43.5,3.1l7.7,15.5c0.8,1.6,2.3,2.7,4.1,3l17.2,2.5c4.5,0.7,6.3,6.2,3,9.4L63.1,45.6c-1.3,1.3-1.9,3.1-1.6,4.9
                    l2.9,17.1c0.8,4.5-3.9,7.9-8,5.8l-15.3-8.1c-1.6-0.8-3.5-0.8-5.1,0l-15.3,8.1c-4,2.1-8.7-1.3-8-5.8l2.9-17.1
                    c0.3-1.8-0.3-3.6-1.6-4.9L1.7,33.5c-3.3-3.2-1.5-8.7,3-9.4l17.2-2.5c1.8-0.3,3.3-1.4,4.1-3l7.7-15.5C35.7-1,41.5-1,43.5,3.1z"/>
                    </svg>);
                }
                return stars;

            case false:
                for(let i = 1; i < val; i++){
                    stars.push(<svg key={i} viewBox="0 0 77.2 73.9" width="20" height="20" style={{fill:"#E28807"}}>
                    <path d="M43.5,3.1l7.7,15.5c0.8,1.6,2.3,2.7,4.1,3l17.2,2.5c4.5,0.7,6.3,6.2,3,9.4L63.1,45.6c-1.3,1.3-1.9,3.1-1.6,4.9
                    l2.9,17.1c0.8,4.5-3.9,7.9-8,5.8l-15.3-8.1c-1.6-0.8-3.5-0.8-5.1,0l-15.3,8.1c-4,2.1-8.7-1.3-8-5.8l2.9-17.1
                    c0.3-1.8-0.3-3.6-1.6-4.9L1.7,33.5c-3.3-3.2-1.5-8.7,3-9.4l17.2-2.5c1.8-0.3,3.3-1.4,4.1-3l7.7-15.5C35.7-1,41.5-1,43.5,3.1z"/>
                    </svg>);
                }
                stars.push(<svg key="halfstar" viewBox="0 0 77.2 73.9" width="20" height="20" style={{fill:"#E28807"}}>
                <path className="st0" d="M33.7,3.1L26,18.6c-0.8,1.6-2.3,2.7-4.1,3L4.7,24.1c-4.5,0.7-6.3,6.2-3,9.4l12.4,12.1c1.3,1.3,1.9,3.1,1.6,4.9
	            l-2.9,17.1c-0.8,4.5,3.9,7.9,8,5.8L36,65.2c0.8-0.4,1.7-0.6,2.6-0.6V0C36.6,0,34.7,1,33.7,3.1z"/>
                </svg>);
                return stars;
            default: break;
        }
    } 

    return (
        <div className="ratingContainer">
            {starIcons(parsedRating)}
        </div>
    );
}

export default starRating;