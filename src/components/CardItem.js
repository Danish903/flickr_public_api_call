import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardItem = ({ src, title, tags, published }) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  const publishedDate = new Date(published).toLocaleDateString(
    "en-US",
    options
  );
  return (
    <Card style={{ display: "flex " }} className="hoverCard">
      <Image src={src} style={{ flexGrow: 1.5 }} />
      <Card.Content style={{ flexGrow: 1 }}>
        {/* <Card.Header>{!!title ? title : "Unkown"}</Card.Header> */}
        <Card.Meta>
          <span className="date">Published in {publishedDate}</span>
        </Card.Meta>
        <Card.Description>{tags}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
