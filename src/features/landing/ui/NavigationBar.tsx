import * as NavigationMenu from "@radix-ui/react-navigation-menu";

function NavigationBar() {
  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACTS", href: "#contacts" },
  ];
  return (
    <NavigationMenu.Root className="w-full py-4 border-b-2 border-brand-dark font-semibold sticky">
      <NavigationMenu.List className="w-full flex justify-between">
        <div className="w-full flex gap-4 md:gap-14">
          {menuItems.slice(0, 3).map((item, index) => (
            <NavigationMenu.Item key={index}>
              <NavigationMenu.Link href={item.href}>{item.label}</NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </div>
        <NavigationMenu.Item>
          <NavigationMenu.Link href={menuItems.at(menuItems.length - 1)?.href}>
            {menuItems.at(menuItems.length - 1)?.label}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default NavigationBar;
