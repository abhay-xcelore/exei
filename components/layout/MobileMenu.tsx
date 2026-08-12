// components/layout/MobileMenu.tsx
"use client";

import Link from "next/link";

type Link = { label: string; href: string };

export default function MobileMenu({
  isOpen,
  links,
  onClose,
}: {
  isOpen: boolean;
  links: Link[];
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <ul className="flex flex-col px-4 py-4 gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="block text-lg hover:text-blue-600"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}