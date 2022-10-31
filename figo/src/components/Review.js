export const Review = ({ img, name, job, review, reviewNum }) => {
  return (
    <div className={reviewNum ? `review-container ${reviewNum}`: "review-container" } >
      <div className="customer-review">{review}</div>
      <div className="customer-details">
        <img src={img} alt="customer image"></img>
        <div>
          <p className="customer-name">{name}</p>
          <p className="customer-job">{job}</p>
        </div>
      </div>
    </div>
  );
};
