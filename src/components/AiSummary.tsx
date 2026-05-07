import { useState } from "react";
import type { ItemKey, RoomItemConfig, RoomTypeOption } from "../utils/Data";

type SummaryItem = {
  name: string;
  value: string;
};

type AiSummaryProps = {
  room: RoomTypeOption;
  config: RoomItemConfig[];
  currentSelections: Partial<Record<ItemKey, string>>;
  summaryItems: SummaryItem[];
  totalCost: number;
};

const isDarkChoice = (value: string) => /dark|charcoal|slate|navy/i.test(value);

function AiSummary({ room, config, currentSelections, summaryItems, totalCost }: AiSummaryProps) {
  const [aiSummary, setAiSummary] = useState<string>("");

  const generateMockSummary = () => {
    const missingItems = config.filter((item) => !currentSelections[item.label]).map((item) => item.label);

    const selectedValues = Object.values(currentSelections).filter(Boolean) as string[];

    const hasMarble = selectedValues.some((value) => /marble/i.test(value));
    const hasQuartz = selectedValues.some((value) => /quartz/i.test(value));

    const flooring = currentSelections["flooring"];
    const wallFinish = currentSelections["wall finish"];
    const bothDark = flooring && wallFinish && isDarkChoice(flooring) && isDarkChoice(wallFinish);

    const costLevel: "low" | "medium" | "high" = hasMarble ? "high" : hasQuartz ? "medium" : "low";

    const issues: string[] = [];
    if (bothDark) {
      issues.push("Dark flooring and dark wall finish together may make the room feel smaller and darker.");
    }

    const recommendations: string[] = [];
    if (!currentSelections["lighting"]) {
      recommendations.push("Add a lighting choice to improve function and balance mood.");
    }
    if (missingItems.length > 0) {
      recommendations.push("Complete remaining selections before procurement.");
    }
    if (recommendations.length === 0) {
      recommendations.push("Review sample swatches in real lighting before final sign-off.");
    }

    const selectedText = summaryItems.map((item) => `${item.name}: ${item.value}`).join(", ");

    const summary = [
      `Room: ${room}.`,
      `Selected items: ${selectedText}.`,
      `Estimated cost implication: ${costLevel}. ${hasMarble ? "Marble contributes to a higher budget range." : "Current selections are generally manageable for budget planning."}`,
      `Design checks: ${issues.length > 0 ? issues.join(" ") : "No immediate compatibility concerns detected."}`,
      `Missing selections: ${missingItems.length > 0 ? missingItems.join(", ") : "none"}.`,
      `Recommended next actions: ${recommendations.join(" ")}`,
    ].join("\n\n");

    setAiSummary(summary);
  };

  const downloadSummaryAsPdf = () => {
    if (!aiSummary.trim() || totalCost === 0) return;

    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;

    const safeSummary = aiSummary.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const formattedCost = `$${totalCost.toLocaleString()}`;

    printWindow.document.write(`
      <html>
        <head>
          <title>Summary</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 32px; color: #0f172a; }
            h1 { margin: 0 0 8px; font-size: 24px; }
            .meta { margin-bottom: 20px; font-size: 14px; color: #334155; }
            .cost { margin: 0 0 20px; font-size: 18px; font-weight: 700; color: #b45309; }
            pre { white-space: pre-wrap; font-size: 13px; line-height: 1.55; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
          </style>
        </head>
        <body>
          <h1>Room Material & Furniture Summary</h1>
          <p class="meta">Room: ${room}</p>
          <p class="cost">Total Selected Cost: ${formattedCost}</p>
          <pre>${safeSummary}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 min-h-240">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">4) Mock AI Summary</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={generateMockSummary}
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
        >
          Generate AI Summary
        </button>
        <button
          type="button"
          onClick={downloadSummaryAsPdf}
          disabled={!aiSummary.trim() || totalCost === 0}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        >
          Download AI Summary
        </button>
      </div>
      <pre className="mt-4 min-h-202 whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-100 dark:bg-slate-950 sm:text-sm">
        {aiSummary || "Your generated summary will appear here."}
      </pre>
    </article>
  );
}

export default AiSummary;
