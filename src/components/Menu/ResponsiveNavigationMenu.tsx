"use client";
import { cn } from "@app/lib";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./NavigationMenu";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@app/components";
import { Link, routing, usePathname, useRouter } from "@app/i18n/routing";

const menuItems = [
  { href: "/students", label: "Students" },
  { href: "/alumni", label: "Alumni" },
  { href: "/startups", label: "Startups" },
  { href: "/program", label: "Program" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ResponsiveNavigationMenu = ({
  orientation,
  locale
}: {
  orientation: "horizontal" | "vertical";
  locale: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const handleLocaleChange = (loc: string) => {
    router.replace(pathname, {locale: loc})
  };
 
  return (
    <NavigationMenu className="flex mx-auto md:mx-0" orientation={orientation}>
      <NavigationMenuList>
        {menuItems.map(({ href, label }) => (
          <NavigationMenuItem
            key={href}
            className="my-4 data-[orientation=horizontal]:my-0"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                pathname === href && "font-bold"
              )}
              asChild
            >
              <Link href={href}>
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="my-4 md:my-0">
          <NavigationMenuLink asChild className="group inline-flex h-9 w-full items-center justify-center rounded-md bg-tertiary text-tertiary-foreground px-8 py-2 font-medium transition-colors">
            <Link href="/sok">
              Søk
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <Tabs value={locale} onValueChange={handleLocaleChange} className="my-8">
          <TabsList>
            {routing.locales.map((loc) =>
              <TabsTrigger value={loc}>{loc}</TabsTrigger>
            )}
          </TabsList>
        </Tabs>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export { ResponsiveNavigationMenu };
