import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div
        className="card__arrow"
        onClick={() => props.onClickMove(props.colIndex, props.todoId, -1)}
      >
        <i className="fas fa-angle-left" />
      </div>
      <div className="card__content">{props.content}</div>
      <div
        className="card__arrow"
        onClick={() => props.onClickMove(props.colIndex, props.todoId, 1)}
      >
        <i className="fas fa-angle-right" />
      </div>
    </div>
  );
};

export default Card;
