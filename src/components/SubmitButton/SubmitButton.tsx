type Props = {
  className: string;
  label: string;
  handleSubmit: any;
};

export default function SubmitButton({
  className,
  label,
  handleSubmit,
}: Props) {
  return (
    <div className="w-full h-10 p-4">
      <button
        className={`w-full h-10 border border-solid rounded-lg bg-blue-600 text-white ${className}`}
        onClick={handleSubmit}
      >
        {label}
      </button>
    </div>
  );
}
