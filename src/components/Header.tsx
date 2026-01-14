"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="group">
            <pre className="font-mono text-[6px] leading-tight text-red-500 transition group-hover:text-red-400 sm:text-[8px]">
              {` ░▒▓██████▓▒░ ░▒▓██████▓▒░ ░▒▓██████▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░
░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒▒▓███▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░`}
            </pre>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden space-x-2 md:flex">
            <Button
              variant="ghost"
              asChild
              className="text-white hover:text-red-400 hover:bg-white/10"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-white/80 hover:text-red-400 hover:bg-white/10"
            >
              <Link href="/historia">História</Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="text-white/80 hover:text-red-400 hover:bg-white/10"
            >
              <Link href="/membros">Membros</Link>
            </Button>
          </div>

          {/* Menu Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-red-400 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-white/10">
              <SheetHeader>
                <SheetTitle className="text-red-500">Menu</SheetTitle>
              </SheetHeader>
              <Separator className="my-4 bg-white/10" />
              <div className="flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start text-white hover:text-red-400 hover:bg-white/10"
                >
                  <Link href="/">Home</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start text-white/80 hover:text-red-400 hover:bg-white/10"
                >
                  <Link href="/historia">História</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start text-white/80 hover:text-red-400 hover:bg-white/10"
                >
                  <Link href="/membros">Membros</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
