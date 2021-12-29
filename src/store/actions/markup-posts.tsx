import { createAction } from '@reduxjs/toolkit';
import { Markup } from 'types';

const markupPosts = createAction<Markup>('MARKUP_POSTS');

export default markupPosts;
