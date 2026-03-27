import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ href, children, className = "", onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-sm bg-red-600 px-5 py-2 text-xs font-extrabold tracking-wider text-white transition  ${className}`}
    >
      {children}
    </Link>
  );
}
