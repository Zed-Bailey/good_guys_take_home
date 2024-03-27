import { StarFilled, StarOutlined } from "./Star";

/**
 * Displays a star rating. If number is less then 5 then empty outline stars will be displayed
 * @param {number} param0 the number of stars to display out of 5
 * @returns 
 */
function StarRating({stars}) {
    
    return (
        <div className="flex">
            {/* Display the full stars */}
            {
                [...Array(stars).keys()].map((_, index) => {
                    return <StarFilled key={index}/>
                })
            }

            {/* Display the empty outline stars */}
            {
                [...Array(5 - stars).keys()].map((_, index) => {
                    return <StarOutlined key={5-index}/>
                })
            } 

        </div>
    );
}

export default StarRating;