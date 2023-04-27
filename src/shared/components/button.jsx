export const Button = ({
  title,
  onClick,
  className = 'border transition-all border-orange-400 hover:bg-orange-500 dark:text-white font-medium text-xl py-2 px-8 rounded',
}) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};
