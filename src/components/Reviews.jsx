function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <h2>Customer Reviews</h2>

      {reviews?.length === 0 && (
        <p>No Reviews Yet</p>
      )}

      {reviews?.map((review, index) => (
        <div
          key={index}
          className="review-card"
        >
          <h4>{review.user}</h4>

          <p>
            {"⭐".repeat(review.rating)}
          </p>

          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;