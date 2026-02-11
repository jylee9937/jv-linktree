import { ProfileWidget } from "@/widgets/profile/ui/ProfileWidget";
import { LinkList } from "@/features/link-list/ui/LinkList";
import { MapWidget } from "@/widgets/map/ui/MapWidget";
import data from "@/shared/config/links.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6">
      <main className="max-w-md mx-auto space-y-8">
        <ProfileWidget profile={data.profile} />
        <LinkList links={data.links} />
        <MapWidget config={data.map} />
      </main>
    </div>
  );
}
