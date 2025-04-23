# 🏏 Bet25

**Bet25** is an interactive, responsive Cricket player selection web app built with React. It allows users to select players for their team, manage selections, claim free credits, and subscribe to updates — all with a polished UI and real-time feedback using React-Toastify.

## 🚀 Features

### 🧭 Navbar
- Beautiful and responsive navbar.
- Includes a **coin balance indicator**.
- A **"Claim Free Credits"** button on the hero section adds coins to the wallet.

### 🦸 Hero Section
- Stunning and responsive hero design.
- Includes a prominent **"Claim Free Credits"** button.

### 🔁 Switch Tab Section
- Two tabs: **Available** and **Selected (0)**.
- Default tab: **Available**.
- Clicking **Selected** redirects to the selected players section.

### 🟢 Available Players Tab
- Fetches player data from a local JSON file.
- Each player is displayed in a card format with a **"Choose Player"** button.
- Responsive layout with smooth transitions.
- Selecting a player:
  - Adds the player to the selected tab.
  - Deducts coin balance.
  - Shows an info toast: `"Player Name Added to your squad"`

### 🔴 Selected Players Tab
- Displays all selected players.
- Each player card has a **"Remove"** button.
- Removing a player:
  - Returns the player to the available pool.
  - Shows a toast message: `"Player Removed"`.
- **"Add More"** button to return to the Available Players tab.

### ✉️ Subscribe Section
- Stylish and responsive section with an email input.
- Allows users to subscribe for updates.

### 🦶 Footer
- Beautiful, responsive footer to complete the app layout.

## ⚙️ Conditional Features

- 🪙 **Claim Free Credits** adds virtual currency to the coin display in the navbar.
- ❌ Attempting to add a player with insufficient balance shows a **warning**: `"Not enough money!"`.
- 🚫 Trying to add more than 6 players shows an **error**: `"Player limit exceeded"`.
- ✅ Adding a player shows an **info**: `"Name Player Added in your squad"`.
- 🔁 Removing a player shows an **info**: `"Player Removed"`.

## 🌐 Tech Stack

- **React JS**
- **React-Toastify** – for user notifications
- **CSS / TailwindCSS** (optional, based on your styling method)
- **Responsive Design** – mobile-first and fully adaptive layout
- **Local JSON** – for player data management
