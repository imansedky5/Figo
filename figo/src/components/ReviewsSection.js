import { Review } from "./Review";
import { Title } from "./Title";

export const ReviewsSection = () => {
  return (
    <section>
      <Title title="Figo Reviews"></Title>
      <div className="reviews-wrapper">
        <Review
          reviewNum="first"
          img="./images/5943924.jpg"
          name="Lurch Schpellchek"
          job="UI & UX @ Microsoft"
          review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
        ></Review>
        <Review
          img="./images/5943924e.jpg"
          name="Theodore Handle"
          job="Design Lead @ Shopify"
          review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
        ></Review>
        <Review
          reviewNum="third"
          img="./images/we.jpg"
          name="Valentino Moros"
          job="Design Lead @ InVision"
          review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
        ></Review>
        <Review
          img="./images/5943924.jpg"
          name="Ingredia Nutrisha"
          job="Sr.Designer @ Stepsiz"
          review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
        ></Review>
        <Review
          reviewNum="fifth"
          img="./images/5943924e.jpg"
          name="Hermann P. Schnitzel"
          job="Sr.Designer @ Stepsiz"
          review="Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense process."
        ></Review>
      </div>
    </section>
  );
};
