import {atom} from 'jotai';

import {ICONS} from "@/shared/utils/icons";// i ll add it later  

export  const navItems: NavItems[]=[
    {
        title: "Features",

    },
    {
        title:"Pricing",
    },
    {
        title:"Resources"
    },
    {
        title:"Docs"
    },


];

export const partners : PartnersTypes[]=[
    {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
      },
      {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
      },
      {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
      },
      {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
      },
      {
        url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
      },

    ]

    export const freePlan: PlanTypes[]=[
        {
            title:"Up to 5 TO 1000 Subscribers",
        },
        {
            title:" Unlimted sends",
        },
        {
            title:"Custom newsletter",
        },
        {
            title:"NewsLetter Analytics",
        }
    ]


    export const GrowPlan: PlanTypes[] = [
        {
          title: "Up to 10,000 subscribers",
        },
        {
          title: "Custom domains",
        },
        {
          title: "API access",
        },
        {
          title: "Newsletter community",
        },
      ];
      
      export const scalePlan: PlanTypes[] = [
        {
          title: "Up to 100,000 subscribers",
        },
        {
          title: "Referal program",
        },
        {
          title: "AI support",
        },
        {
          title: "Advanced support system",
        },
        {
          title: "Ad Network",
        },
      ];

      
      export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Profile");

export const sideBarItems: DashBoardSidebarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems: DashBoardSidebarTypes[] = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/",
    icon: ICONS.world,
  },
];

export const subscribersData: SubscribersDataTypes[] = [
  {
    _id: "64f717a45331088de2ce886c",
    email: "programmershahriarsajeeb@gmail.com",
    createdAt: "5Feb 2024",
    source: "Becodemy website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886c",
    email: "support@becodemy.com",
    createdAt: "8Feb 2024",
    source: "External website",
    status: "subscribed",
  },
];

