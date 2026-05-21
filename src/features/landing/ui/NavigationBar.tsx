import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";

function NavigationBar() {
  const menuItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACTS", href: "#contacts" },
  ];
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <NavigationMenu.Root className="w-full py-4 border-b-2 border-brand-dark font-semibold sticky text-xl">
        <NavigationMenu.List className="w-full flex justify-between">
          <div className="w-full flex gap-8 md:gap-14">
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
    </motion.header>
  );
}

export default NavigationBar;
