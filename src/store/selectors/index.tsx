import { createSelector } from '@reduxjs/toolkit';
import { IState } from 'interfaces';

export const selectError = createSelector(
  (state: IState) => state.error,
  (error: string) => error,
);
