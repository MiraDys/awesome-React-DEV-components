// code from> https://www.hover.dev/components/navigation
// video tutorial> https://www.youtube.com/watch?v=ZwF9pxEqErY

"use client";

import { useState } from "react";
import Logo from "./UI/sidebar/logo";
import { MdAnimation } from "react-icons/md";
import { MdHome } from "react-icons/md";

import { motion } from "motion/react";

interface Link {
  title: string;
  href: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (selected: string) => void;
  notifications: number;
}

const links: Link[] = [
  {
    title: "Home",
    href: "/",
    icon: <MdHome size={24} />,
    selected: "Home",
    setSelected: (selected) => selected,
    notifications: 0,
  },
  {
    title: "Parallax",
    href: "/parallax",
    icon: <MdAnimation size={24} />,
    selected: "Parallax",
    setSelected: (selected) => selected,
    notifications: 1,
  },
];

export default function AnimatedSidebar() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Home");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <TitleSection open={open} />
      <div className="space-y-1">
        {links.map((link) => (
          <LinksSection
            key={link.title}
            open={open}
            selected={selected}
            setSelected={setSelected}
            title={link.title}
            icon={link.icon}
          />
        ))}
      </div>
      <ToggleToClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
}

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center gap-1 rounded-md transition-colors hover:bg-slate-100 p-2">
        <Logo />
        {open && (
          <motion.h1
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-3xl font-semibold"
          >
            Awesome
          </motion.h1>
        )}
      </div>
    </div>
  );
};

const LinksSection = ({
  open,
  selected,
  setSelected,
  title,
  icon,
}: {
  open: boolean;
  selected: string;
  setSelected: (selected: string) => void;
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <div className="flex items-center gap-2">
        {icon}
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-sm font-semibold"
          >
            {title}
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};

import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";

const ToggleToClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="absolute bottom-0 mb-10 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="p-4">
        {open ? <FiChevronsLeft size={34} /> : <FiChevronsRight size={34} />}
      </div>
    </button>
  );
};
