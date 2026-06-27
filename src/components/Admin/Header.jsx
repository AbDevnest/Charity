export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-end items-center sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Admin</span>
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </header>
  );
}