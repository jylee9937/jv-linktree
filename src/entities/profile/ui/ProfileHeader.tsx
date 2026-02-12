import { Avatar } from '@/shared/ui/Avatar';
import { ProfileData } from '../model/types';

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar src={profile.avatar} alt={profile.name} size={120} />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{profile.bio}</p>
      </div>
    </div>
  );
}
