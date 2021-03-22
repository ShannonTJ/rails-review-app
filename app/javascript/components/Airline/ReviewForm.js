import React, { Fragment } from "react";
import {
  Wrapper,
  Headline,
  Field,
  RatingContainer,
  RatingTitle,
  RatingBox,
  Submit,
} from "./ReviewFormStyle";

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={score}
          name="rating"
          id={`rating=${score}`}
          checked={props.review.score == score}
          onChange={() => console.log("selected:", score)}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>
          Have an experience with {props.attributes.name}? Share your review!
        </Headline>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate This Airline</RatingTitle>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <Submit type="submit">Submit Your Review</Submit>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
