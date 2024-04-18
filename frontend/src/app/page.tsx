import NotFound from "@/components/Icons/NotFound";
import RealHome from "@/components/home/realHome";
export default function Home() {
  return (
    <div className="flex-col gap-10">
      <RealHome />
      <NotFound/>
    </div>
  );
}
