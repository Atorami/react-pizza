import React from "react";
import axios from "axios";
import qs from "qs";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";

import { searchContext } from "../App";
import {
  useGetAllItemsQuery,
  useGetItemsByCategoryQuery,
  useGetItemsByPageQuery,
  useGetItemsBySearchQuery,
  useGetItemsBySortTypeQuery,
} from "../redux/services/pizzas";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

export const Home = () => {
  const { data: itemData } = useGetAllItemsQuery();

  console.log(itemData);

  const navigate = useNavigate();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  const { searchValue } = useContext(searchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (num) => {
    dispatch(setCurrentPage(num));
  };

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType,
      categoryId,
      currentPage,
    });
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((val) => <PizzaBlock key={val.id} {...val} />);
  const skeletons = [...new Array(6)].map((val, i) => (
    <Skeleton key={i}></Skeleton>
  ));

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://642955f15a40b82da4d0c96f.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType}&order=desc${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sortType, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => onChangeCategory(i)}
        />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>

      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      ></Pagination>
    </div>
  );
};

export default Home;
