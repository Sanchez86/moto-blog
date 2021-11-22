import { createAction } from '@reduxjs/toolkit';
import { IData } from 'interfaces';

export const loadPostsRequest = createAction('LOAD_POSTS_REQUEST');
export const loadPostsResponse = createAction<Array<IData>>('LOAD_POSTS_RESPONSE');
export const loadPostsFailure = createAction<string>('LOAD_POSTS_FAILURE');
