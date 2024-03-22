interface inputType {
  children: React.ReactNode;
  label: string;
  className?: string;
}

export default function Input({ children, label, className }: inputType) {
  return (
    <div>
      <label className="text-xl font-semibold">{label}</label>
      <input
        className={className ? className : "m-4 py-2 px-4 rounded-lg shadow-xl"}
      >
        {children}
      </input>
    </div>
  );
}
