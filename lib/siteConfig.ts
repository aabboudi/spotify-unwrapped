export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Spotify Wrapped",
  description: "Placeholder.",
  callToAction: {
    label: "Login",
    href: "/login",
  },
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Stats",
      href: "/stats",
    },
    {
      label: "Create",
      href: "/create-playlist",
    },
  ],
  links: {
    placeholder: "#",
  },
};
