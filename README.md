This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# KAI_GROUP // KZN_PARTNER_ECOSYSTEM_v2.0
> Status: OPERATIONAL // Protocol: LOCAL_COMMERCE_SYNC

## 01_SYSTEM_OVERVIEW
A high-density technical ecosystem bridging local business commerce with municipal transport infrastructure in KwaZulu-Natal. Built on the **KAI Technical Manual DNA**.

## 02_CORE_ARCHITECTURE


### 1. Consumer_Node (Path_Alpha)
- **Explore_Grid**: Interactive Mapbox/Supabase integration for node discovery.
- **Personal_Vault**: Archival system for saved businesses and transit routes.
- **Secure_Relay**: Direct messaging channel for business inquiries.

### 2. Business_Node (Path_Beta)
- **Operational_Launchpad**: Real-time triage center for leads and notifications.
- **Inventory_Manager**: SKU-level asset tracking and pricing grid.
- **Market_Analytics**: Enterprise-tier radar charts for sector benchmarking.

## 03_DESIGN_SPECIFICATIONS (THE_KAI_DNA)
- **Typography**: `Font_Mono` exclusively. Italicized headers for "Manual" feel.
- **Palette**: 
  - `Base`: #edeae7 (Off-White/Concrete)
  - `Contrast`: #000000 (Onyx)
  - `Accent`: #6082a3 (KAI Blue)
  - `Alert`: #dc143c (Crimson)
- **Borders**: 4px black solid on primary containers; 2px on sub-nodes.
- **Shadows**: Hard-offset 90-degree shadows (e.g., `shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]`).

## 04_COMMAND_SHORTCUTS
- `CTRL + K`: Global Search Overlay (System-wide)
- `ESC`: Close active modal / Overlay
- `SHIFT + M`: Toggle Map/Business Mode

## 05_DATABASE_INTEGRATION
The system utilizes **Supabase Realtime** for:
- **Global_Notifications**: Postgres change listeners on the `messages` table.
- **Profile_Sync**: Dynamic rendering of business tiers (Silver/Gold/Enterprise).
- **Asset_Registry**: Product and pricing data synchronization.

## 06_DIRECTORY_STRUCTURE
```text
src/
├── app/
│   ├── (dashboard)/       # Private Route Group
│   │   ├── business/      # B2B Dashboards
│   │   ├── explore/       # B2C Map/Discovery
│   │   └── messages/      # Comm_Relay
│   └── page.tsx           # Public_Airlock
├── components/            # Technical_Nodes
│   ├── ui/                # Hard-Brutalist Components
│   └── explore/           # Map_Specific_Logic
└── utils/                 # Supabase_Config