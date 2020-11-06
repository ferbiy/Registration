import React from "react";

export default function AddButton(props) {
  return (
    props.length < 3 && (
      <div>
        <button
          type="button"
          onClick={props.handleAddBank}
          className="button button--big"
        >
          Add account
        </button>
      </div>
    )
  );
}
