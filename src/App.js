import { useEffect, useState } from 'react';
import Review from './components/Review';
import MockProduct from './components/MockProduct';
import RatingOverview from './components/RatingOverview';


function App() {
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      // fetch review data from public folder
      let data = await fetch('/reviews.json').then(r => r.json());
    
      // sort reviews by date 
      setReviews(data.sort((a, b) =>  new Date(b.SUBMISSION_DATE) - new Date(a.SUBMISSION_DATE)));
    
      setVisibleReviews(data.slice(0, 10));
      setReviewIndex(10);
    }

    if(reviews.length == 0) {
      fetchData();
    }
    
  }, []); 


  /**
   * Loads the next slice of reviews, concats to the already visible reviews
   */
  const loadMoreReviews = () => {
    
    // gets the next slice of reviews
    let moreReviews = reviews.slice(reviewIndex, reviewIndex + 10);

    setVisibleReviews(visibleReviews.concat(moreReviews));
    setReviewIndex(reviewIndex + 10);

  }


  /**
   * Sort the reviews based on the sortType
   * @param {string} sortType the type of sorting to apply, either "high", "low" or "new". Defaults to new
   */
  function filterReviews(sortType = "new") {
    setReviewIndex(0);
    let reviewsCpy = Array.from(reviews);

    switch(sortType) {

      case "high":
        reviewsCpy.sort((a, b) => a.RATING < b.RATING);
        break;

      case "low":
        reviewsCpy.sort((a, b) => a.RATING > b.RATING);
        break;
        
      // sort by submission date is the default
      case "new":
      default:
        reviewsCpy.sort((a, b) =>  new Date(b.SUBMISSION_DATE) - new Date(a.SUBMISSION_DATE));
        break;
      
    }

    setReviews(reviewsCpy);
    setVisibleReviews(reviewsCpy.slice(0, 10));
    setReviewIndex(10);


  }



  return (
    <div className='flex flex-col items-center justify-center p-20'>
      {/* // max width 1024px */}
      <div className="w-full max-w-screen-lg my-10">

        <MockProduct/>

        <h2 className='text-2xl font-bold my-5'>Ratings & Reviews</h2>

        <RatingOverview ratings={reviews}/>


        <div className='block text-center sm:flex justify-end py-4 px-4 my-4 border-2 border-gray-300 rounded-lg items-center space-x-4'>
          <h2 className='text-lg font-semibold'>Filter reviews by</h2>
          <select className='p-2 rounded-md' onChange={(e) => filterReviews(e.target.value)}>
            <option value="new">Newest</option>
            <option value="high">Highest Rating</option>
            <option value="low">Lowest Rating</option>
          </select>
        </div>

        <div className='flex flex-col  gap-y-5'>
          {/* render the visible reviews */}
          {visibleReviews.map((value) => <Review key={value.REVIEW_ID} review={value}/>)}


          {/* Display the load more reviews button only when the current index is less then the number of reviews */}
          {
            reviewIndex <= reviews.length ? 
            <button className='px-4 py-3 bg-blue-500 w-fit rounded-lg font-bold text-white self-center' onClick={loadMoreReviews}>Load more...</button>
            : null
          }
        </div>

      </div>
    </div>
    
  );
}

export default App;
