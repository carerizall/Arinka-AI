import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="relative w-420px">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
        />

        <Input
          className="pl-10"
          placeholder="Cari lead..."
        />
      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-xl border border-zinc-800 p-2 hover:bg-zinc-900">
          <Bell size={20}/>
        </button>

        <Avatar>
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>

      </div>
    </header>
  );
}