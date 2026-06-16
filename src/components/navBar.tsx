import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export async function Navbar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden shrink-0">
              <Image
                src="/utils/milk-frame.png"
                alt="Miliki Frame Logo"
                fill // Tells the image to completely fill out the parent div container dimensions
                className="object-cover" // Forces the image to center-crop cleanly without stretching
                priority
              />
            </div>
          </Link>
          <Link
            href="/."
            className="font-bold text-xl tracking-tight text-gray-900"
          >
            Miliki Frame
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <Button asChild variant="outline">
                <Link href="/handler/signin">Sin In</Link>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button asChild>
                <Link href="/handler/signup">Sign Up</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
