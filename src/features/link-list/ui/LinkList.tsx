import { LinkCard } from "@/entities/link/ui/LinkCard";
import { LinkItem } from "@/shared/types";

interface LinkListProps {
  links: LinkItem[];
}

export function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
