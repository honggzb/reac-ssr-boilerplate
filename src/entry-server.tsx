
// import ReactDOMServer from 'react-dom/server'
// import { StaticRouter } from "react-router-dom/server";
// import { Router } from "./router";

// interface IRenderProps {
//   path: string;
// }

// export function render({ path }: IRenderProps) {
//   return ReactDOMServer.renderToString(
//     <StaticRouter location={path}>
//       <Router />
//     </StaticRouter>
//   );
// }

import renderToString from 'preact-render-to-string';
import { App } from './App'

export function render() {
  const html = renderToString(<App />)
  return { html }
}