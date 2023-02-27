import React from "react";
import "./DropDown.scss";
export default function DropDown(props) {
  return (
    <div class="drop-down">
      <button class="drop-down__toggle">Filter By A Region</button>
      <ul class="drop-down__list">
        <li class="drop-down__list-item">
          <button class="drop-down__btn">Africa</button>
        </li>
        <li class="drop-down__list-item">
          <button class="drop-down__btn">America</button>
        </li>
        <li class="drop-down__list-item">
          <button class="drop-down__btn">Asia</button>
        </li>
        <li class="drop-down__list-item">
          <button class="drop-down__btn">Europe</button>
        </li>
        <li class="drop-down__list-item">
          <button class="drop-down__btn">Oceania</button>
        </li>
      </ul>
    </div>
  );
}
