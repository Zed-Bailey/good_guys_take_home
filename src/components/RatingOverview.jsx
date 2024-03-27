import { useEffect, useMemo, useState } from "react";
import StarRating from "./StarRating";
import { StarFilled } from "./Star";
import { ImageIcon } from "./ImageIcon";



const RatingDistribution = ({ratings}) => {
    const [ratingsFor, setRatingsFor] = useState({
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
    });

    // counts the number of ratings for each rating
    useMemo(() => {
        let rf = {
            five: ratings.filter(x => x.RATING === 5).length,
            four: ratings.filter(x => x.RATING === 4).length,
            three: ratings.filter(x => x.RATING === 3).length,
            two: ratings.filter(x => x.RATING === 2).length,
            one: ratings.filter(x => x.RATING === 1).length,
        }

        setRatingsFor(rf);

    }, [ratings]);

    return (
        <div className="flex flex-col">
            {
                //  iterate through all the keys and display
                Object.keys(ratingsFor).map((key, index) => {
                    return (
                        <div key={index} className="flex items-center gap-2">
                            <StarFilled />
                            <b className="text-lg">{5-index}</b>
                            <div className="h-5 w-52 bg-blue-200 relative rounded-md">
                                {/* width is a percentage of the total number of ratings */}
                                <div className={`absolute top-0 left-0 h-full rounded-md bg-blue-500`} style={{width: `${(ratingsFor[key] / ratings.length) * 100}%`}}></div>
                            </div>
                        </div>
                    )
                })
                
            }
            
        </div>
    );
}

function RatingOverview({ratings}) {
    

    const [ratingDistribution, setRatingDistribution] = useState({
        pctRecommend: 0,
        avgRating : 0,
        flooredAvgRating : 0
    });

    useMemo(() => {
        let numRecommended = ratings.filter(x => x.RECOMMENDATION === "TRUE").length;
        let totalRating = ratings.filter(x => x.RATING > 0).reduce((prev, curr) => prev + curr.RATING , 0);

        setRatingDistribution({
            pctRecommend: (numRecommended/ratings.length) * 100,
            avgRating: (totalRating / ratings.length).toFixed(2),
            flooredAvgRating : Math.floor(totalRating/ratings.length)
        });
    }, [ratings]);

    return (
        <div className="flex flex-col md:flex-row md:justify-evenly space-y-4 items-center md:items-start">

            <div>
                <div className="w-48 h-56 bg-gray-300 rounded-lg flex flex-col items-center justify-center">
                    <ImageIcon/>
                </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-3">Overall</h3>

                {ratings.length > 0 ? <StarRating stars={ratingDistribution.flooredAvgRating}/> : null}
                <p className="text-gray-500">{ratingDistribution.avgRating} out of 5 stars from {ratings.length} reviews</p>

                <p className="text-sm">
                    <span className="text-lg font-semibold">{ratingDistribution.pctRecommend}%</span> of reviewers recommend this product
                </p>     
            </div>

            <div>
                <h3 className="text-xl font-bold mb-3 text-center">Rating Snapshot</h3>
                <RatingDistribution ratings={ratings}/>
            </div>

        </div>
    );
}

export default RatingOverview;