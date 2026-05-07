import { useMemo, useState } from "react";
import Header from "./components/HeaderTitle";
import MaterialAndFurniture from "./components/MaterialAndFurniture";
import RoomType from "./components/RoomType";
import SelectedItemList from "./components/SelectedItemList";
import AiSummary from "./components/AiSummary";
import { optionPrices, roomConfigs, type ItemKey, type RoomTypeOption } from "./utils/Data";

function App() {
  const [room, setRoom] = useState<RoomTypeOption>("kitchen");
  const [selectionsByRoom, setSelectionsByRoom] = useState<Record<RoomTypeOption, Partial<Record<ItemKey, string>>>>({
    kitchen: {},
    bathroom: {},
    "living room": {},
    bedroom: {},
    laundry: {},
  });

  const config = roomConfigs[room];
  const currentSelections = selectionsByRoom[room];

  const summaryItems = useMemo(
    () =>
      config.map((item) => ({
        name: item.label,
        value: currentSelections[item.label] ?? "Not selected",
      })),
    [config, currentSelections],
  );

  const totalCost = useMemo(
    () =>
      summaryItems.reduce((sum, item) => {
        if (item.value === "Not selected") return sum;
        return sum + (optionPrices[item.value] ?? 0);
      }, 0),
    [summaryItems],
  );

  const updateSelection = (key: ItemKey, value: string) => {
    setSelectionsByRoom((prev) => ({
      ...prev,
      [room]: {
        ...prev[room],
        [key]: value,
      },
    }));
  };
  
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#fff8ee,_#f6f9ff_55%,_#eef2f7)] px-4 py-8 text-slate-800 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_#17222f,_#0f172a_52%,_#020617)] dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Header
          eyebrow="Materials & Furniture Selection Assistant"
          title="Room Material & Furniture Selector"
          subtitle="Choose a room, pick finishes and furniture, and generate a mock AI summary with basic cost and compatibility insights."
        />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <RoomType 
              room={room} 
              onRoomChange={setRoom} />
            <MaterialAndFurniture
              room={room}
              config={config}
              currentSelections={currentSelections}
              onSelectionChange={updateSelection}
            />
            <SelectedItemList summaryItems={summaryItems} totalCost={totalCost} />
          </div>

          <aside className="space-y-6">
            <AiSummary 
              room={room} 
              config={config} 
              currentSelections={currentSelections} 
              summaryItems={summaryItems}
              totalCost={totalCost}
            />
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;
