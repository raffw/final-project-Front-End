import Card from "../../Elements/Menu/Card";
import { getApi } from "../../../Services/Card-Service";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const screenWidth = window.innerWidth;
function MenuList() {
  const [menu, setMenu] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    recipe();
  }, []);

  const recipe = async () => {
    const data = await getApi();
    setMenu(data.data.items);
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const searchData = async (query) => {
    setIsLoading(true);
    const data = await searchDataCall(query);
    if (data.data.products) {
      setIsLoading(false);
      setDataProducts(data.data.products);
    }
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className="hidden md:block text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />

      <div
        className="flex py-2 gap-2 overflow-x-auto scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {menu.map((item, index) => (
          <Card cards={item} key={index}></Card>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
