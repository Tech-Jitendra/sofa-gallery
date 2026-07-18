# Sofa Gallery — ChatGPT Development Handoff

## Project Overview

You are continuing development of **Sofa Gallery**, a furniture e-commerce mobile application built with React Native and Expo.

The application goal is to provide a complete furniture shopping experience:

- Browse sofas and furniture
- Search products
- View product details
- Add products to cart
- Checkout
- Manage profile
- Support multiple languages
- Support light/dark themes


---

# Project Information

## App Name

Sofa Gallery


## Platform

- Expo SDK 54
- React Native 0.81.5
- TypeScript
- Android
- iOS
- Web


## Package Manager

npm


## Router

Expo Router (file based routing)


Main entry:

```
app/_layout.tsx
```


---

# Current Architecture

The project follows feature-based architecture.


Structure:

```
sofa-gallery

app/
 ├── _layout.tsx
 ├── index.tsx
 ├── (auth)/
 │     ├── login.tsx
 │     └── register.tsx
 │
 └── (tabs)/
       ├── _layout.tsx
       ├── home/
       │    ├── index.tsx
       │    ├── products.tsx
       │    ├── categories.tsx
       │    └── product-details.tsx
       │
       ├── cart/
       │    └── index.tsx
       │
       └── profile/
            ├── index.tsx
            └── settings.tsx



src/

 ├── components/
 │      └── ui/
 │
 ├── features/
 │      ├── home/
 │      ├── auth/
 │      ├── cart/
 │      └── profile/
 │
 ├── store/
 │
 ├── theme/
 │
 ├── i18n/
 │
 ├── api/
 │
 └── lib/
```


---

# Tech Stack


## UI

- React Native
- Custom UI components
- Lucide React Native icons
- React Native Safe Area Context


## Navigation

Expo Router


## State Management

Zustand


Current stores:

```
src/store/

auth.store.ts
cart.store.ts
theme.store.ts
```


## Server State

React Query

Package:

```
@tanstack/react-query
```


## API

Axios


## Forms

- React Hook Form
- Zod validation


## Storage

- MMKV
- Expo Secure Store


## Localization

- i18next
- react-i18next
- expo-localization


Languages:

```
English (en)

Hindi (hi)
```


---

# Root Layout

File:

```
app/_layout.tsx
```


Current provider order:


```
ThemeProvider

       |
       |

QueryProvider

       |
       |

Expo Router Stack
```


Example:

```tsx
<ThemeProvider>

    <QueryProvider>

        <Stack
            screenOptions={{
                headerShown:false
            }}
        />

    </QueryProvider>

</ThemeProvider>
```


---

# Authentication Flow


Current flow:


```
App Start

      |
      |

Splash Screen

      |
      |

Check auth token


      |
      |

Token exists

      |
      v

(tabs)


No token

      |
      v

(auth)/login

```


Splash:

```
app/index.tsx
```


Uses:

```tsx
useAuthStore()
```


---

# Authentication Status


Completed:

- Login screen UI
- Register screen UI
- Auth Zustand store
- Splash redirect


Needs:

- Real authentication API
- Form validation
- Better error messages
- Loading states
- Forgot password
- OTP support


---

# Theme System


Location:

```
src/theme
```


Files:


```
colors.ts

spacing.ts

radius.ts

typography.ts

themes.ts

ThemeProvider.tsx

index.ts
```


Current colors:


Primary:

```
#8B5E3C
```


Secondary:

```
#D4A373
```


Light theme:

```
background
surface
text
border
card
```


Dark theme:

```
background
surface
text
border
card
```


Usage:


```tsx
const {
theme
}=useTheme();


const colors =
theme.colors;
```


Never hardcode colors.


Avoid:

```tsx
backgroundColor:"#fff"
```


Use:

```tsx
backgroundColor:
colors.background
```


---

# Typography System


Location:

```
src/theme/typography.ts
```


Available:


```ts
FontSize

xs
sm
md
lg
xl
xxl
display
```


Weights:

```
regular
medium
semibold
bold
```


---

# Spacing System


Location:

```
src/theme/spacing.ts
```


Available:


```
xs
sm
md
lg
xl
xxl
```


Example:


```tsx
padding:
Spacing.lg
```


---

# Localization


Location:


```
src/i18n
```


Structure:


```
i18n/

index.ts

locales/

    en.ts

    hi.ts
```


Initialization:


```ts
i18n
.use(initReactI18next)
.init()
```


Usage:


```tsx
const {
t
}=useTranslation();


t("home.title")
```


Current supported:

- English
- Hindi


Language switching:

```
profile/settings
```


---

# Tab Navigation


Location:


```
app/(tabs)/_layout.tsx
```


Tabs:


```
Home

Cart

Profile
```


Icons:


Using:

```
lucide-react-native
```


Current icons:

```
Home

ShoppingCart

User
```


Important:

Expo Router tab names must match folders.


Correct:


```
<Tabs.Screen
name="home"
/>
```


Folder:

```
(tabs)/home/index.tsx
```


---

# Home Feature


Location:


```
src/features/home
```


Components:


```
components/

AppHeader

SearchBar

HeroCarousel

CategoryList

FlashSale

ProductCard
```


Home screen:


```
app/(tabs)/home/index.tsx
```


Current layout:


```
SafeAreaView

    AppHeader

    SearchBar

    HeroCarousel

    CategoryList

    FlashSale
```


Features:

- Pull to refresh
- Theme support
- Scroll layout


Needs:

- Real product API
- Better animations
- Featured sections
- Recommended products
- Recently viewed
- Better empty/loading states


---

# Product System


Current files:


```
home/products.tsx

home/product-details.tsx
```


ProductCard exists.


Needs:


- Product model
- Product API
- Product filtering
- Sorting
- Wishlist
- Reviews
- Image gallery


---

# Cart System


Store:


```
src/store/cart.store.ts
```


Implemented:


- Add product
- Remove product
- Update quantity
- Persistence


Needs:


- Complete cart UI
- Price calculation
- Checkout
- Order creation


---

# Profile System


Routes:


```
profile/index.tsx

profile/settings.tsx
```


Current:


- Profile page
- Settings page
- Language switcher


Needs:


- User information
- Orders
- Addresses
- Wishlist
- Account settings


---

# Known Issues


## Expo Router route warning


Example:


```
No route named "home" exists
```


Check:

- Folder names
- Tabs.Screen names
- index.tsx placement


---

## Text error


Error:


```
Text strings must be rendered within a <Text>
```


Usually caused by:


Wrong:

```tsx
<View>
hello
</View>
```


Correct:


```tsx
<View>

<Text>
hello
</Text>

</View>
```


---

## SafeArea warning


Deprecated:


```tsx
SafeAreaView
```


Use:


```tsx
react-native-safe-area-context
```


---

# Development Rules


Always:


1. Use TypeScript

2. Keep feature folder architecture

3. Reuse UI components

4. Use theme colors

5. Support dark mode

6. Support translations

7. Keep business logic separated

8. Avoid duplicate components

9. Keep code production ready


---

# Development Priority


## Phase 1

Authentication

- API integration
- Validation
- Error handling


## Phase 2

Products

- Product API
- Product listing
- Product details


## Phase 3

Cart

- Cart screen
- Checkout
- Orders


## Phase 4

Profile

- Account
- Orders
- Wishlist


## Phase 5

Polish

- Animations
- Performance
- Better UX


---

# Instructions For Future ChatGPT Sessions


Before modifying code:

1. Understand existing architecture.

2. Do not rewrite working systems.

3. Provide complete files when changing code.

4. Explain why changes are needed.

5. Keep Expo Router conventions.

6. Maintain theme and localization support.

7. Prefer reusable components.


---

# Current Development Goal


Continue building Sofa Gallery into a production-quality furniture shopping application.

Next recommended tasks:

1. Improve authentication flow
2. Connect product data
3. Build product details
4. Complete cart
5. Add checkout
6. Improve profile


---

# End Of Handoff