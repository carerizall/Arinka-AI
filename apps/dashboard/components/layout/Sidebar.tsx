import {
  LayoutDashboard,
  MessageCircle,
  Users,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const menus = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "CRM", icon: Users },
  { name: "AI Assistant", icon: Bot },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-900 p-6">
      <h1 className="mb-10 text-2xl font-bold">
        🤖 Arinka AI
      </h1>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <button
              key={menu.name}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              <Icon size={20} />
              {menu.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}