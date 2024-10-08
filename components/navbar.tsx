"use client";

import * as React from "react";
import Link from "next/link";
import { Frame, Mic } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 w-full bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Frame className="h-8 w-8 text-primary" />
              <span className="ml-2 text-lg font-semibold">Logo</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {siteConfig.navItems.map((item) => (
                <Button key={item.label} variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <Button key={siteConfig.callToAction.label} variant="default" asChild>
                <Link href={siteConfig.callToAction.href}>
                  {siteConfig.callToAction.label}
                  <Mic className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <ThemeSwitch />
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2">
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {siteConfig.navItems.map((item, index) => (
                    <React.Fragment key={item.label}>
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                      {index < siteConfig.navItems.length - 1 && (
                        <div className="h-[1px] bg-border" />
                      )}
                    </React.Fragment>
                  ))}
                  <Button asChild variant="default">
                    <Link href={siteConfig.callToAction.href}>
                      {siteConfig.callToAction.label}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
