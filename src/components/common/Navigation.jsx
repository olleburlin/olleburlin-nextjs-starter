"use client";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";

export default function Navigation({ isExpanded, toggleExpansion, menuItems }) {
  const pathname = usePathname();
  const isCurrentPage = (uri) => uri === pathname;

  return (
    <>
      <div
        className={`${
          isExpanded ? " " : ""
        } flex flex-row  justify-between items-center w-full `}
      >
        <div className="hidden lg:block">
          {!isExpanded && (
            <ul className="flex flex-row gap-8  navigation">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} scroll={false}>
                    <span
                      className={isCurrentPage(item.href) ? "opacity-50" : null}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={`${
            pathname === "/" || isExpanded ? "text-white" : "text-white"
          } block lg:hidden relative z-20`}
        >
          <Hamburger toggled={isExpanded} toggle={toggleExpansion} />
        </div>
      </div>
    </>
  );
}
