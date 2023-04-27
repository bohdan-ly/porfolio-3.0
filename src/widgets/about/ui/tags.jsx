import classNames from 'classnames';

export const Tags = ({ clear, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-wrap justify-starts items-center py-2 text-xs font-medium gap-3',
        className,
      )}
    >
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        React
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        TypeScript
      </span>
      <span
        className={classNames('px-4 rounded-full py-1 text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        Redux
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        SOLID
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        Responsive
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        Axios
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        Git
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        Vite
      </span>
      <span
        className={classNames('px-4 py-1 rounded-full text-lg', {
          'border border-gray-900 text-gray-900': clear,
          'bg-blue-800 text-white': !clear,
        })}
      >
        TailwindCSS
      </span>
    </div>
  );
};
