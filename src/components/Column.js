import React from "react";

import Card from "./Card";

const renderCards = props => {
  return props.todos.map(todo => (
    <Card
      todoId={todo.id}
      content={todo.content}
      colIndex={todo.column}
      onClickMove={props.onClickMove}
    />
  ));
};

const onClickAddCard = props => {
  const content = window.prompt("Add new Todo");
  props.onClickAddCard(props.index, content);
};

const Column = props => {
  return (
    <div className="column">
      <div className={`column__header column__header--${props.name}`}>
        {props.name}
      </div>
      <div className="column__cards">{renderCards(props)}</div>
      <div className="column__add" onClick={() => onClickAddCard(props)}>
        + Add a card
      </div>
    </div>
  );
};

export default Column;
