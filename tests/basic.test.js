const { roomConfigs, optionPrices } = require("../src/utils/Data");

const calculateRoomCost = (room, selections) => {
  const config = roomConfigs[room];

  return config.reduce((sum, item) => {
    const selectedOption = selections[item.label];
    if (!selectedOption) return sum;
    return sum + (optionPrices[selectedOption] ?? 0);
  }, 0);
};

describe("room selection and expected cost", () => {
  test("kitchen selections should match expected total cost", () => {
    const room = "kitchen";
    const selections = {
      flooring: "Timber",
      "wall finish": "White Paint",
      benchtop: "Quartz",
      "cabinetry finish": "Matte White",
      lighting: "Pendant",
    };

    const totalCost = calculateRoomCost(room, selections);
    const expectedCost = 1200 + 450 + 1800 + 700 + 650;

    expect(totalCost).toBe(expectedCost);
  });

  test("changing room should use that room config for cost calculation", () => {
    const room = "bedroom";
    const selections = {
      flooring: "Carpet",
      "wall finish": "Soft White Paint",
      bed: "Platform Bed",
      table: "Nightstand Pair",
      lighting: "Bedside Lamp",
    };

    const totalCost = calculateRoomCost(room, selections);
    const expectedCost = 1100 + 430 + 1600 + 820 + 360;

    expect(totalCost).toBe(expectedCost);
  });
});
