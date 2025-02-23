type Props = {
  className: string;
  label: string;
  handleSubmit: any;
  type: "submit" | undefined;
};

export default function SubmitButton({
  className,
  label,
  handleSubmit,
  type,
}: Props) {
  return (
    <div className="w-full h-10 p-4">
      <button
        type={type}
        className={`w-full h-10 border border-solid rounded-lg bg-blue-600 text-white ${className}`}
        onClick={!type ? handleSubmit : () => {}}
      >
        {label}
      </button>
    </div>
  );
}
