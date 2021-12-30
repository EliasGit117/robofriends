import react from "react";
import Card from "../card/card";

const CardList = (props) => {

  return (
    <div>
      {
        props.robots.map(r =>
          <Card key={r.id}
            id={r.id}
            name={r.name}
            username={r.username}
            email={r.email}/>
          )
      }
    </div>
  );
};

export default CardList;