import React, { Fragment, lazy, Suspense } from 'react'
import { render } from 'react-dom';
const RelativeModalComponent = lazy(() => import(/* webpackChunkName: "RelativeModal" */'./relative-modal-component'));
const AbosoluteModalComponent = lazy(() => import(/* webpackChunkName: "AbsoluteModal" */'./absolute-modal-component'));
const RelativeTableComponent = lazy(() => import(/* webpackChunkName: "RelativeTable" */'./relative-table-component'));
// const LocalCJSTable = lazy(() => import(/* webpackChunkName: "Local CJS table" */ './local-cjs-table'));
const App = () => (
  <div>
    <Suspense fallback={<Fragment />}>
      <RelativeModalComponent />
      <AbosoluteModalComponent />
      <RelativeTableComponent />
      {/* <LocalCJSTable /> */}
    </Suspense>
  </div>
)

render(<App />, document.getElementById('root'));