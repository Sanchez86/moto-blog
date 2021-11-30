import { createSelector } from '@reduxjs/toolkit';
import { IState, IData } from 'interfaces';

export const selectError = createSelector(
  (state: IState) => state.error,
  (error: string) => error,
);

export const selectPosts = createSelector(
  (state: IState) => state.data,
  (data: IData[]) => data,
);
