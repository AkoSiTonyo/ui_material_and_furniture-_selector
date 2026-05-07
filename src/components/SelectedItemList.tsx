type SummaryItem = {
  name: string;
  value: string;
};

type SelectedItemListProps = {
  summaryItems: SummaryItem[];
  totalCost: number;
};

function SelectedItemList({ summaryItems, totalCost }: SelectedItemListProps) {
  const hasSelections = summaryItems.some((item) => item.value !== "Not selected");

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">3) Selected Summary</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {summaryItems.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-3 rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-800">
            <span className="font-medium capitalize text-slate-700 dark:text-slate-200">{item.name}</span>
            <span className={`text-right ${item.value === "Not selected" ? "text-rose-600 dark:text-rose-400" : "text-slate-900 dark:text-slate-100"}`}>
              {item.value}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/50 dark:bg-amber-500/10 flex-row flex justify-between items-center">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Estimated cost from your item selected</p>
        <p className="text-lg font-bold text-amber-700 dark:text-amber-300">
          {hasSelections ? `$${totalCost.toLocaleString()}` : "$0"}
        </p>
      </div>
    </article>
  );
}

export default SelectedItemList;
