"use client";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center mb-6 text-3xl font-bold text-white tracking-wide relative pb-2">
      {children}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#cc0000] to-transparent shadow-[0_0_10px_rgba(204,0,0,0.5)]" />
    </h2>
  );
}
