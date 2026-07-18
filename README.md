# 🛋️ Sofa Gallery

A modern furniture shopping mobile application built with **Expo React Native**.  
Sofa Gallery provides a premium e-commerce experience for browsing sofas, furniture collections, managing carts, user accounts, and personalized shopping.

The application is designed with a scalable architecture suitable for production-level development.

---

# 📱 Screenshots

│
├── app
│ │
│ ├── _layout.tsx
│ ├── index.tsx
│ │
│ ├── (auth)
│ │ ├── login.tsx
│ │ └── register.tsx
│ │
│ ├── (tabs)
│ │ ├── _layout.tsx
│ │ ├── home
│ │ │ └── index.tsx
│ │ ├── cart
│ │ │ └── index.tsx
│ │ └── profile
│ │ └── index.tsx
│ │
│ ├── home
│ │ ├── products.tsx
│ │ ├── categories.tsx
│ │ └── product-details.tsx
│ │
│ └── profile
│ └── settings.tsx
│
│
├── src
│
│ ├── api
│ │ └── client.ts
│
│ ├── components
│ │ └── ui
│ │
│ ├── features
│ │ │
│ │ ├── home
│ │ │ ├── components
│ │ │ ├── services
│ │ │ └── hooks
│ │ │
│ │ ├── auth
│ │ ├── cart
│ │ └── profile
│ │
│ ├── store
│ │ ├── auth.store.ts
│ │ ├── cart.store.ts
│ │ └── theme.store.ts
│ │
│ ├── theme
│ │ ├── colors.ts
│ │ ├── spacing.ts
│ │ ├── radius.ts
│ │ ├── typography.ts
│ │ ├── themes.ts
│ │ └── ThemeProvider.tsx
│ │
│ ├── i18n
│ │ ├── index.ts
│ │ └── locales
│ │ ├── en.ts
│ │ └── hi.ts
│ │
│ └── lib
│ └── storage.ts
│
└── package.json

---

# ✨ Features

## Authentication

- User login
- User registration
- Secure token storage
- Authentication state management
- Protected routes
- Splash screen navigation


## Home Experience

- Premium furniture showcase
- Hero carousel
- Search functionality
- Category browsing
- Flash sale section
- Featured products
- Product cards
- Pull-to-refresh support


## Product Experience

- Product listing
- Product details
- Furniture categories
- Product navigation
- Wishlist support (planned)


## Cart

- Add products to cart
- Remove products
- Update quantity
- Cart persistence
- Price calculation


## Profile

- User profile
- Account settings
- Language preferences
- Theme preferences


## Localization

Supported languages:

- 🇬🇧 English
- 🇮🇳 Hindi

Powered by:

- i18next
- react-i18next


## Theme Support

- Light theme
- Dark theme
- Centralized design tokens
- Dynamic colors


---

# 🏗️ Tech Stack

## Mobile

| Technology | Purpose |
|---|---|
| Expo SDK 54 | Mobile framework |
| React Native 0.81 | UI framework |
| TypeScript | Type safety |
| Expo Router | File-based navigation |


## State Management

| Technology | Purpose |
|-|-|
| Zustand | Local application state |
| MMKV | Fast persistence |


## Server Data

| Technology | Purpose |
|-|-|
| React Query | API state management |
| Axios | HTTP client |


## Forms & Validation

| Technology | Purpose |
|-|-|
| React Hook Form | Form handling |
| Zod | Validation schemas |


## UI

| Technology | Purpose |
|-|-|
| Custom Design System | Consistent UI |
| Lucide React Native | Icons |
| React Native Safe Area Context | Safe layouts |


---

# 📂 Project Structure
