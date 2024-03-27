import StarRating from "./StarRating";

function Review({review}) {
    return (

        <div className="flex flex-col sm:flex-row ">

            {/* Review star rating */}
            <div className="min-w-fit flex flex-col items-center order-2 mt-2 sm:mt-0 sm:order-1">
                <StarRating stars={review.RATING}/>
                
                <p className="text-sm text-gray-500">{review.RATING} out of 5</p>
            </div>
            
            {/* Review content */}
            <div className="flex flex-col items-start ms-5 w-full order-1 sm:order-2">
                <p className="font-bold text-lg">{review.CUSTOMER_NAME}</p>
                <p className="font-medium">{review.REVIEW_TITLE}</p>
                <p className="text-sm mt-2">{review.REVIEW_TEXT}</p>    

                <p className="text-sm mt-2 text-gray-500">{new Date(review.SUBMISSION_DATE).toDateString()}</p>
            </div>
        </div>

        
    )
}


export default Review;