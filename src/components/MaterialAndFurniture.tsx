import type { ItemKey, RoomItemConfig, RoomTypeOption } from "../utils/Data";

type MaterialAndFurnitureProps = {
  room: RoomTypeOption;
  config: RoomItemConfig[];
  currentSelections: Partial<Record<ItemKey, string>>;
  onSelectionChange: (key: ItemKey, value: string) => void;
};

function MaterialAndFurniture({ room, config, currentSelections, onSelectionChange }: MaterialAndFurnitureProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">2) Select Materials & Furniture</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Current room: <span className="font-semibold capitalize text-slate-900 dark:text-slate-100">{room}</span>
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {config.map((item) => (
          <label key={item.label} className="block">
            <span className="mb-2 block text-sm font-semibold capitalize text-slate-700 dark:text-slate-200">{item.label}</span>
            <select
              value={currentSelections[item.label] ?? ""}
              onChange={(e) => onSelectionChange(item.label, e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-0 transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="">Select an option</option>
              {item.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </article>
  );
}

export default MaterialAndFurniture;
