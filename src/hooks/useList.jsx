import { useState } from "react";

export default function useList(list, ElementRendered) {
  list.map((regionName) => {
    return (
      <ElementRendered key={regionName} />
      //  <li key={regionName} className="drop-down__list-item">
      //    <button className="drop-down__btn" onClick={switchToggle}>
      //      {regionName}
      //    </button>
      //  </li>
    );
  });
  return [toggle, switchToggle];
}
