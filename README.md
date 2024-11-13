# Recipe App

## Description

This is a Recipe App that integrates with the free MealDB API to fetch recipe data. The app allows users to explore various recipes, add them to a cart, and provides a basic authentication system. Users can also view all recipes and search for recipes by name.

### Features:

- **Banner Section:** The home page features a hero section with a call-to-action button.
- **Top Recipes Section:** Displays top recipes fetched from the MealDB API.
- **Search Functionality:** Users can search for recipes by name.
- **All Recipes Page:** A dedicated page to display all available recipes.
- **Add to Cart:** Users can add recipes to a cart, which is saved locally if not logged in and to the user's account if logged in.
- **Basic Authentication:** Implemented login and signup flow using name, email, phone, and password.
- **Mobile Responsiveness:** The app is fully responsive on mobile devices.

## Features Implemented

### 1. **API Integration:**

- Converted the entire HTTP API kit into Next.js API routes for seamless server-side integration.

### 2. **Add to Cart Functionality:**

- Implemented the ability for users to add recipes to a cart.
- Cart data is stored locally if the user is not logged in, and to the user's account if logged in.

### 3. **Authentication:**

- Implemented a basic authentication system with user data (name, email, phone, password) being preserved in local storage.

### 4. **All Recipes Page:**

- Created a new page to display all available recipes from the API.

### 5. **Bug Fixes:**

- Fixed the **unique map key error** in the recipe list.
- Resolved issues with the **modal close function** not working properly.
- Resolved issues with the **toggle navbar hamburger button** not closing after navigation.
- Fixed deprecated tags in the **modal component** and passed the `SingleRecipe` as a child component.
- Addressed **Next.js config images.remotePatterns warning**.

### 6. **Design and Accessibility Improvements:**

- Designed a **Hero Section Banner** with a call-to-action button.
- Improved accessibility by ensuring proper **aria attributes** and accessible design elements.

### 7. **Configuration:**

- Added an **.env** file to securely store sensitive data and prevent exposure.

### 8. **Notification**

- Added an **React hot toast** for notify user interaction.

## Bug Fixes

- Fixed **unique map key error** in the recipe list.
- Resolved **modal close function** issue.
- Prevent **add to cart** adding same recipe more than once. same recipe can not add multiple time in Cart.
- Resolved **Toggle Navbar** issue.
- Fixed **deprecated tags** in the modal component.
- Corrected **images.remotePatterns** warning in Next.js config.

## Time Estimate

- Total time spent on this assessment: **25+ hours** (adjust based on actual time).

---

Thank you for reviewing my work!
