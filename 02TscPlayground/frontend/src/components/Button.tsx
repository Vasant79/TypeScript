interface buttonTypes {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: buttonTypes) {
  return (
    <div>
      <button
        className={
          className
            ? className
            : "m-4 py-2 px-6 bg-blue-400 rounded-md shadow-lg hover:bg-blue-500"
        }
      >
        {children}
      </button>
    </div>
  );
}
