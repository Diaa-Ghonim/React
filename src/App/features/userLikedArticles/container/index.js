import React, { Component, memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLikedArticles } from '../actionsCreator';
import ShowListArticles from '../../../shared/ShowListOfArticles';



export default ({ username }) => {


  const dispatch = useDispatch();
  const userLikedArticles = useSelector(state => state.userLikedArticles);
  const { articles, isLoading, error } = userLikedArticles;

  useEffect(() => {
    dispatch(getUserLikedArticles(username));
  }, []);

  return useMemo(() => <ShowListArticles
    articles={articles}
    isLoading={isLoading}
    error={error}
    tryLoadingAgain={getUserLikedArticles}
  />, [articles, isLoading, error]);
}

