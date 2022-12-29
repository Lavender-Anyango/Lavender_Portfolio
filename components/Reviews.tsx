import Image from 'next/image';
import quote from '../asset/quote.png';
import { reviewsData } from '../data/data';

const Reviews = () => {
    return (
        <div className="reviews">
            <div className="proficiency_title">Reviews</div>
            <div className="intro_name_bar"></div>
            <div className="review_container">
                {reviewsData.map((item) => (
                    <div className="review_container_review" key={item.id}>
                        <div className="review_top">
                            <span className="left"></span>
                            <span className="right">
                                <Image src={quote} width={16.04} height={12} alt="quote" />
                            </span>
                        </div>
                        <div className="review_middle">
                            <span className="left"></span>
                            <span className="right">{item.text}</span>
                        </div>
                        <div className="review_bottom">
                            <span>{item.name}</span>
                            <span>{item.company}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
