import { SocialIcon } from "@/shared/lib/icons";
import { LinkItem } from "../model/types";

interface LinkCardProps {
  link: LinkItem;
}

export function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-md bg-white dark:bg-gray-800"
    >
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
        <SocialIcon name={link.icon} />
      </div>
      <span className="flex-1 font-medium text-gray-900 dark:text-gray-100">
        {link.title}
      </span>
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}
