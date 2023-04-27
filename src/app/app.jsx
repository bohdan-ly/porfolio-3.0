import { Routes } from 'pages/routes';
import { Suspense } from 'react';
import { Loader } from 'shared/components/loader';

function App({}) {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center w-full py-10 bg-white dark:bg-zinc-900">
            <Loader sizes="w-24" />
          </div>
        }
      >
        <Routes />
      </Suspense>
    </>
  );
}

export default App;
