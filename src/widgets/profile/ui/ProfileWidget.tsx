import { ProfileHeader } from "@/entities/profile/ui/ProfileHeader";
import { ProfileData } from "@/shared/types";

interface ProfileWidgetProps {
  profile: ProfileData;
}

export function ProfileWidget({ profile }: ProfileWidgetProps) {
  return (
    <section className="w-full">
      <ProfileHeader profile={profile} />
    </section>
  );
}
