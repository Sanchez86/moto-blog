import { createReducer } from '@reduxjs/toolkit';
import { IData } from 'interfaces';
import { Markup } from 'types';
import {
  loadPostsRequest,
  loadPostsResponse,
  loadPostsFailure,
} from '../actions/load-posts';

import markupPosts from '../actions/markup-posts';

interface IInitialState {
  data: Array<IData>;
  error: string;
  isLoading: boolean;
  markup: Markup;
}

const lsData = localStorage.getItem('data');

const initialState: IInitialState = {
  data: lsData ? JSON.parse(lsData) : [],
  error: '',
  isLoading: false,
  markup: 'module',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(markupPosts, (state, action) => {
      state.markup = action.payload;
    })
    .addCase(loadPostsRequest, (state) => { // запрос
      state.isLoading = true;
      state.error = ''; // обнулили
    })
    .addCase(loadPostsResponse, (state, action) => { // ответ
      localStorage.setItem('data', JSON.stringify(action.payload));
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(loadPostsFailure, (state, action) => { // ошибка
      state.isLoading = false;
      state.error = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
