import React from 'react';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import { FaCommentAltSmile } from '../lib';

const renderer = createRenderer();

export default () => (
  <Provider renderer={renderer}>
    <div>
      <FaCommentAltSmile color="black" size={24} />
    </div>
  </Provider>
);
