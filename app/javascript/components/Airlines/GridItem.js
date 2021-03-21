import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Card, Logo, Name, LinkWrapper, StyledLink } from "./GridItemStyle";

const GridItem = (props) => {
  return (
    <Card>
      <Logo>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </Logo>
      <Name>{props.attributes.name}</Name>
      <div className="score">{props.attributes.avg_score}</div>
      <LinkWrapper>
        <StyledLink to={`/airlines/${props.attributes.slug}`}>
          Show Details
        </StyledLink>
      </LinkWrapper>
    </Card>
  );
};

export default GridItem;
