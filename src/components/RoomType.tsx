import bathroomGif from "../assets/bathroom.gif";
import bedroomGif from "../assets/bedroom.gif";
import kitchenGif from "../assets/kitchen.gif";
import laundryGif from "../assets/laundry.gif";
import livingRoomGif from "../assets/living-room.gif";
import { roomTypes, type RoomTypeOption } from "../utils/Data";

const roomPreviewGif: Record<RoomTypeOption, string> = {
  kitchen: kitchenGif,
  bathroom: bathroomGif,
  "living room": livingRoomGif,
  bedroom: bedroomGif,
  laundry: laundryGif,
};

type RoomTypeProps = {
  room: RoomTypeOption;
  onRoomChange: (room: RoomTypeOption) => void;
};

function RoomType({ room, onRoomChange }: RoomTypeProps) {

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">1) Select Room Type</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {roomTypes.map((roomType) => (
          <button
            key={roomType}
            type="button"
            onClick={() => onRoomChange(roomType)}
            className={`rounded-xl border p-2 text-sm font-medium capitalize transition flex gap-1 flex-col items-center ${
              room === roomType
                ? "border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-500/20 dark:text-amber-200"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500"
            }`}
          >
            <img
              src={roomPreviewGif[roomType]}
              alt={`${roomType} preview`}
              className="h-12 w-12 rounded-lg object-cover"
            />
            <span className="mt-2 block text-md">{roomType}</span>
          </button>
        ))}
      </div>
    </article>
  );
}

export default RoomType;
