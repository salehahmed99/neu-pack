# InfoZip - Modern Directory Utility

A lightweight, cross-platform desktop app built with **Neutralinojs** designed to provide deep directory insights and reliable file compression.

## ✨ Features

- **Deep Scan Engine** - Recursively analyzes directory structures to calculate total file counts and project size.
- **Native API Extension** - Extends the Neutralinojs core with file compression capabilities (not available in the standard API).
- **WebSocket Communication** - Real-time, bi-directional events between the React UI and the background extension for live updates.
- **Atomic Write Strategy** - Uses `.tmp` file streaming to ensure zip archives are never corrupted if a process is interrupted.
- **Process Control** - Ability to abort active zipping operations and clean up temporary artifacts immediately.
- **Three-Tier Architecture** - High-level separation between UI (React), Bridge (Neutralino), and Native Logic (Node.js).
- **Stunning UI & Smooth Animations** — A polished UI powered by Tailwind CSS and Framer Motion, utilizing spring physics for ultra-smooth, responsive interactions.

## 📸 Demo :

https://github.com/user-attachments/assets/437073bf-e1fd-480e-8dfa-f36b3efc0ae8

## 🧠 How It's Built Using Neutralinojs APIs

### 1. Filesystem API (`Neutralino.filesystem`)

Used for recursive directory traversal and file metadata retrieval:

```typescript
// Get metadata for a specific path
const stats = await filesystem.getStats(entry.path);

// Read directory contents
const entries = await filesystem.readDirectory(folderPath);
```

### 2. OS API (`Neutralino.os`)

Handles the native "Select Folder" interaction:

```typescript
// Open native OS folder picker
const folderPath = await os.showFolderDialog("Select a project folder");
```

### 3. Extensions API (`Neutralino.extensions`)

The core "Flex" of the app — offloading zipping to a background Node.js process:

```typescript
// Dispatching the task to the Node.js extension
await extensions.dispatch("js.neutralino.zipper", "zipFolder", {
  path: folderData.path,
  fileCount: folderData.fileCount,
});
```

### 4. Events API (`Neutralino.events`)

Handles real-time communication between the Node.js Extension and the React UI:

```typescript
// Listen for progress updates broadcasted by the extension
events.on("zipProgress", (event) => {
  setZipProgress(event.detail.percentage);
});
```

## 🚀 Getting Started

```bash
# 1. Install Neutralinojs CLI
npm install -g @neutralinojs/neu

# 2. Clone and enter the repo
git clone https://github.com/salehahmed99/info-zip.git
cd info-zip

# 3. Download the native binaries
neu update

# 4. Install extension dependencies
cd extensions/zipper 
npm install

# 5. Install React dependencies
cd ../../react-src 
npm install

# 6. Run the application
cd ..
neu run

```

## 📝 License

MIT License
