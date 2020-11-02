import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { App } from 'components/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'Sandrine Tuto React',
  };

  const pageData = {
    title: `Hello ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />,
    ),
    pageData,
  });
}
