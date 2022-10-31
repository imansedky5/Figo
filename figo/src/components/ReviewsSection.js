import { Review } from "./Review";

export const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <Review
        reviewNum="first"
        img="./images/5943924.jpg"
        name="Lurch Schpellchek"
        review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
      ></Review>
      <Review
        img="./images/5943924e.jpg"
        name="Theodore Handle"
        review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
      ></Review>
      <Review
      reviewNum="third"
        img="./images/we.jpg"
        name="Valentino Moros"
        review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
      ></Review>
      <Review
        img="./images/5943924.jpg"
        name="Ingredia Nutrisha"
        review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
      ></Review>
      <Review
      reviewNum="fifth"
        img="./images/5943924e.jpg"
        name="Hermann P. Schnitzel"
        review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
      ></Review>
    </section>
  );
};
