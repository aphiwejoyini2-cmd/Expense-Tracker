type ExpenseCardProps = {
  title: string;
  category: string;
  amount: number;
  onDelete: () => void;
};

export default function ExpenseCard({
  title,
  category,
  amount,
  onDelete,
}: ExpenseCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <p className="text-sm text-gray-500">
            {category}
          </p>
        </div>

        <p className="text-lg font-bold text-gray-900">
          R {amount}
        </p>
      </div>

      <button
        onClick={onDelete}
        className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm text-white"
      >
        Delete
      </button>
    </div>
  );
}