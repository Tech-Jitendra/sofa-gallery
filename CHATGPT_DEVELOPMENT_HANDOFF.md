# Sofa Gallery — ChatGPT Development Handoff

Copy and paste the content below into ChatGPT to continue development of this project.

---

You are continuing the development of Sofa Gallery, an Expo React Native app for a furniture/e-commerce experience.

Project summary:
- App name: Sofa Gallery
- Platform: Expo SDK 54 + React Native 0.81
- Router: Expo Router (file-based routing)
- Language: TypeScript
- State management: Zustand for local state, React Query for server data
- Persistence: MMKV via react-native-mmkv
- UI: custom design system under src/components/ui with themed styling
- Current app structure: auth flow, tabs for home/cart/profile, home feature modules, shared theme/provider setup

Repository context:
- Root app entry uses Expo Router via app/_layout.tsx
- The app is organized into feature-based folders under src/features and route-based screens under app/
- The home feature already has UI sections such as AppHeader, SearchBar, HeroCarousel, CategoryList, and FlashSale
- Cart state is implemented with Zustand in src/store/cart.store.ts
- QueryClient is configured in src/providers/QueryProvider.tsx
- Theme support exists in src/theme/ThemeProvider.tsx and src/store/theme.store.ts
- Auth screens are present as route files but their implementations are currently empty/stubbed
- API service files exist but currently use placeholder endpoints

Current implementation status:
- Core app shell and navigation are present
- Home screen layout is mostly scaffolded
- Cart store and persistence are working at a basic level
- Theme provider and query provider are set up
- Auth screens, product details flow, real API integrations, and checkout/profile flows are incomplete
- Some parts are still placeholder/demo-style and need to be turned into real product functionality

Project goals for the next development phase:
1. Complete authentication flow (login/register screens and validation)
2. Replace placeholder API calls with a real backend or mock data layer
3. Build complete product listing/details experience
4. Implement cart UI and checkout flow
5. Build profile and wishlist experiences
6. Ensure the app is visually consistent and production-ready

Important architecture rules:
- Keep using Expo Router and file-based routing
- Prefer TypeScript and typed models
- Follow the existing feature-folder structure under src/features
- Reuse shared UI components from src/components/ui instead of creating ad-hoc components
- Use Zustand for local app state such as auth, cart, theme
- Use React Query for API calls and server-state fetching
- Keep business logic separated from UI where possible
- Respect the existing alias-based imports using @/

Suggested folder conventions:
- app/ contains route screens
- src/features/<feature>/ contains feature-specific screens, components, hooks, services, and models
- src/components/ui/ contains shared UI primitives
- src/store/ contains Zustand stores
- src/api/ contains API client/configuration
- src/lib/ contains storage and helper utilities

Recommended implementation order:
1. Authentication
   - Implement login/register screens
   - Add form validation and basic error handling
   - Connect to a mock or real auth service

2. Home and products
   - Replace placeholder product/category API calls with real data
   - Connect Home, Products, and Product Details screens to actual data
   - Add loading/error states

3. Cart and checkout
   - Build a real cart screen using the existing store
   - Add quantity updates, price totals, and remove item actions
   - Add checkout UI and order confirmation flow

4. Profile and account
   - Implement user profile screen
   - Add account settings and order history placeholders if needed

5. Polish
   - Improve empty states, loading states, and responsiveness
   - Add consistent spacing, typography, and visual design

Code quality expectations:
- Keep code clean, readable, and modular
- Avoid unnecessary rewrites of existing working structure
- Prefer small, incremental changes
- Add proper loading and empty states
- Handle errors gracefully
- Keep the app usable on both iOS and Android

Key files to inspect first:
- app/_layout.tsx
- app/(tabs)/home/index.tsx
- app/(tabs)/cart/index.tsx
- src/store/cart.store.ts
- src/providers/QueryProvider.tsx
- src/theme/ThemeProvider.tsx
- src/features/home/services/home.api.ts
- src/lib/storage.ts
- app/(auth)/login.tsx
- app/(auth)/register.tsx

When implementing, please:
- Inspect the existing structure before editing
- Preserve current architecture and conventions
- Make changes incrementally
- Explain what you changed and why
- Verify the app still builds logically after each major change
- Prefer reusable components and typed interfaces

If you need to decide between approaches, choose the approach that best fits this Expo Router + React Native + TypeScript architecture and keeps the codebase maintainable.

---

Task for ChatGPT:
Please continue developing this app by implementing the next highest-value features in a maintainable way. Start with the authentication flow and then move to product/cart functionality, while keeping the existing architecture intact.
