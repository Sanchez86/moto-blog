import { createAction } from '@reduxjs/toolkit';

type Markup = 'list' | 'module' | 'quilt';

const markupPosts = createAction<Markup>('MARKUP_POSTS');

export default markupPosts;
