import React from "react";
import { Card } from "semantic-ui-react";
import CardItem from "./CardItem";
export const FeedCard = ({ data }) => {
  return (
    <Card.Group style={{ marginTop: 30 }}>
      {data.length > 0 &&
        data.map(({ media, title, tags, published }) => (
          <CardItem
            key={media.m}
            src={media.m}
            title={title}
            tags={tags}
            published={published}
          />
        ))}
    </Card.Group>
  );
};
