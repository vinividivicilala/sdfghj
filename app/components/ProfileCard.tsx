import { useUser } from "@clerk/remix";
import CollabToggle from "./CollabToggle";
import { Info } from "lucide-react";

export function ProfileCard() {
  const { user } = useUser();
  return (
    <div className="bg-gray-900/35 backdrop-brightness-95 border  backdrop-blur-sm rounded-xl shadow-2xl mb-6 h-fit">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold text-slate-900">My profile</h2>
        <div className="flex gap-1">
          <p className="text-green-600 -translate-y-1 mx-2">beta</p>
          <CollabToggle/></div>
      </div>
      <div className="p-6 grid md:grid-cols-[240px_1fr] gap-6">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user?.imageUrl}
            alt="Profile"
            className="w-full aspect-square object-cover rounded-xl"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-slate-900">Full Name</label>
            <p className="font-medium text-slate-900">{user?.fullName}</p>
          </div>
          <div>
            <label className="text-sm text-slate-900">Phone Number</label>
            <p className="font-medium">{""}</p>
          </div>
          <div>
            <label className="text-sm text-slate-900">Email</label>
            <p className="font-medium text-slate-900">{user?.emailAddresses.toString()}</p>
          </div>
          <div>
            <label className="text-sm text-slate-900">
              SMS alerts activation
            </label>
            <span className="ml-2 px-2 py-1 text-green-600 text-xs font-medium rounded-full">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
