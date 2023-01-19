import React from "react";
import { List, Item } from "../List";

export default function Visited() {
  const categoryVisited = [
    {
      category: "Недвижимость",
      href: "#",
      discription: "О Сталинка",
    },
    {
      category: "Маркет",
      href: "#",
      discription: "Iphone",
    },
  ];
  return (
    <ul className='list-visited'>
      <List items={categoryVisited}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.category} className='item-visited'>
                <a href={item.href}>
                  <span>{item.category}</span>
                </a>
                <span className='discription'> - {item.discription}</span>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}