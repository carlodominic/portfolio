type SocialLink = {
  name: string;
  url: string;
};

type SocialProps = {
  links: SocialLink[];
};

export const Social = ({ links }: SocialProps) => {
  return (
    <div className="flex justify-center space-x-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:underline transition-colors duration-300"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};