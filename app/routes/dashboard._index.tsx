import { BlogSection } from "~/components/BlogSection";
import { CollabCard } from "~/components/ColabCard";
import { ProfileCard } from "~/components/ProfileCard";
import Writeblog from "~/components/Writeblog";

export default function DashboardPage() {
  return (
      <div className="grid md:grid-cols-[1fr_500px] max-w-7xl mx-auto sm:p-10 p-5 gap-6">
        <div className="col-span-0.5">
          <ProfileCard />
          <Writeblog />
       </div>
        <div className="space-y-6">
          <BlogSection />
          <CollabCard />
        </div>
      </div>
  );
}
