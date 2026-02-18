import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="XRBridge"
        width={1376}
        height={300}
        className="h-7 md:h-10 w-auto -ml-8 md:-ml-[60px]"
        priority
      />
    </div>
  );
}
