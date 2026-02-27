# RabatBites - Restaurant Discovery App (Flutter)

This is a complete **Flutter (Dart)** mobile application that implements the restaurant discovery UI.

## 📱 Screens Implemented

1. **Home Screen** (`lib/screens/home_screen.dart`)
   - Header with "Trending Restaurants" title and "See all (43)" link
   - Horizontal scrollable food category chips (Italian, Chinese, Nigerian highlighted)
   - Featured restaurant card with "Happy Jones" details
   - Trending restaurants horizontal scrollable list
   
2. **Search Screen** (`lib/screens/search_screen.dart`)
   - Search bar with real-time filtering
   - Filter chips for cuisine types
   - Search results displayed as vertical list

3. **Orders Screen** (`lib/screens/orders_screen.dart`)
   - Tab navigation: Active, Past, Favorites
   - Order cards with status indicators (Delivered, On the way, Preparing)
   - Order item details

4. **Profile Screen** (`lib/screens/profile_screen.dart`)
   - Login/logout functionality
   - User profile display
   - Quick stats (Orders, Favorites, Saved)
   - Settings menu items

5. **Restaurant Detail Screen** (`lib/screens/restaurant_detail_screen.dart`)
   - Restaurant image header with gradient overlay
   - OPEN badge and rating display
   - Menu categories with item list
   - Add to cart functionality
   - Cart checkout sheet

## 🎨 Features

- **Category Chips**: Horizontal scrollable with Nigerian highlighted
- **Featured Card**: Happy Jones with:
  - High-quality food background image
  - OPEN badge (top-left)
  - 4.5 star rating (top-right)
  - Restaurant name in bold
  - Address in smaller font
- **Cart System**: Add items, view cart, checkout
- **Navigation**: Bottom tab bar (Home, Search, Orders, Profile)

## 🚀 How to Run

1. Install Flutter SDK: https://flutter.dev/docs/get-started/install
2. Create a new Flutter project:
   ```bash
   flutter create foodie_go
   ```
3. Replace the contents of `lib/` with these files
4. Run the app:
   ```bash
   flutter run
   ```

## 📁 File Structure

```
lib/
├── main.dart                 # App entry point with navigation
├── models/
│   └── models.dart          # Data models (Restaurant, MenuItem, Order)
├── data/
│   └── data.dart            # Sample data
├── screens/
│   ├── home_screen.dart     # Home screen
│   ├── search_screen.dart   # Search screen
│   ├── orders_screen.dart   # Orders screen
│   ├── profile_screen.dart  # Profile screen
│   └── restaurant_detail_screen.dart  # Restaurant details
└── widgets/
    ├── restaurant_card.dart # Restaurant card widget
    └── category_chip.dart   # Category chip widget
```

## 🎯 Design Details

- **Font**: Clean sans-serif (Roboto in Material 3)
- **Colors**: 
  - Primary: Emerald Green (#10B981)
  - Background: Light Gray (#F9FAFB)
  - Text: Dark Gray (#111827)
- **OPEN Badge**: Green pill-shaped badge
- **Rating**: Star icon with amber color
- **Cards**: Rounded corners (20px), subtle shadows
