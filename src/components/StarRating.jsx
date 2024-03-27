import { StarFilled, StarOutlined } from "./Star";

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