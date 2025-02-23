export default function PageView({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-full flex flex-col justify-center">{children}</div>;
}
