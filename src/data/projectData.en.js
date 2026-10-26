// English text for every project in projectData.js, keyed by slug. It must mirror the Spanish
// structure exactly (same sections, same list lengths); projectData.js stops the build otherwise.
export default {
  "sopa-de-letras": {
    descripcion:
      "Modern, responsive word search generator with built-in dark/light mode: with any list of words the user enters, the program generates the word search, which can be printed, solved, or answered within the same page.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "Teachers and parents who want a quick activity often lose time building word searches by hand, or end up with generators full of options they don't need.",
      },
      {
        titulo: "The idea",
        texto:
          "A simple word search maker: you type the words you want, and you can print the result or solve it right on the site. It works for a fun moment with small children or to create class activities in minutes, with words from any school subject.",
      },
      {
        titulo: "What it does",
        lista: [
          "Generates the word search from any list of words you enter.",
          "It can be printed, or solved and checked within the same page.",
          "Works in the browser, with nothing to install, on computer or phone.",
          "Has light and dark modes.",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "HTML, CSS and JavaScript with no server. The logic for placing the words in the grid and handling the game comes from bunkat's wordfind.js, wordfindgame.js and tag-it.js libraries, with my own changes for this project: the interface, the light and dark modes and printing.",
      },
      {
        titulo: "What I learned",
        lista: [
          "Understanding better how JavaScript functions work. That's why I started from bunkat's generator: analyzing it helped me see how the language behaves.",
          "The first version was my final school project: just HTML, CSS and JavaScript with a very simple interface. The approach was similar to the Snake game: practicing those three languages.",
          "The current design helped me get familiar with responsive interfaces and with switching between light and dark themes.",
        ],
      },
      {
        titulo: "Credits",
        texto: "The generator's foundation is bunkat's work. This project adapts it and adds its own interface.",
        enlaces: [{ texto: "bunkat's repository on GitHub" }],
      },
    ],
  },

  pacman: {
    descripcion:
      "Recreation of the Pac-Man game aiming for fidelity to the arcade version, using the SDL2 library for sounds and sprites, for complete fidelity to the arcade version.",
    caso: [
      {
        titulo: "The goal",
        texto:
          "Recreate Pac-Man (1980) as faithfully as possible to the arcade version, using C++ and the SDL2 library for graphics, sound and input.",
      },
      {
        titulo: "What it includes",
        lista: [
          "The four ghosts (Blinky, Pinky, Inky and Clyde) with their Scatter and Chase modes, and animations per direction.",
          "Frightened state with a warning flash, eyes that return home and a score from 200 to 1600 per consecutive ghost.",
          "A 12-frame death animation and eight different fruits depending on the level, from the cherry to the key.",
          "A siren that speeds up when few dots remain, high score, pause, restart and volume control (100, 50, 25 or mute).",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "C++ with SDL2, organized by classes (Game, Ghost, GhostAI, AudioManager) and buildable with CMake or Makefile. All sprites and sounds live in an assets folder, separate from the code.",
      },
      {
        titulo: "An interesting bug",
        texto:
          "In version 1.1, Blinky and Pinky got stuck in loops in the corners during Chase mode. The cause: when switching between Scatter and Chase the ghosts did not reverse direction, something the original arcade does. The fix was to call reverseDirection() inside Ghost::setMode() on every transition.",
      },
      {
        titulo: "What I learned",
        lista: [
          "Understanding how C++ works in video games, something I had never touched: before, I had only used C++ and its logic in school projects.",
          "With the help of the SDL2 library, understanding how resources, sounds and everything involved in a game are handled.",
        ],
      },
    ],
  },

  nexudrive: {
    descripcion:
      "Own NAS server with login, users with personalized folders, a file explorer with preview, resumable uploads and compressed downloads. In development: pending a security review before opening to the internet.",
    ahora: "In active development; not yet open to the public.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "NAS-style apps tend to fall into one of two extremes. Filebrowser has a simple interface but lacks Office document support. Others do offer Office, but come with many features almost nobody uses and become heavy and hard to manage. In addition, few offer several languages without that same excess.",
      },
      {
        titulo: "The idea",
        texto:
          "Take the best of each: a NAS that installs easily with Docker, with several users and an administrator who manages everything, compatibility with Office and many file types, and several languages, without the excess of features.",
      },
      {
        titulo: "What it does",
        lista: [
          "Users with their own folders and an administrator with full control.",
          "File explorer with preview of images, audio, video and documents, and text file editing.",
          "Search within each user's space.",
          "Resumable uploads and folder downloads as zip or tar.",
          "Editing of Office documents, with a fallback mode that converts them to PDF.",
          "Interface available in several languages.",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "Go backend and React frontend with TypeScript, packaged with Docker. For Office it uses the WOPI protocol, compatible with editing servers such as Collabora, and LibreOffice as a conversion alternative.",
      },
      {
        titulo: "Current status",
        texto: "It's in development and not yet open to the public, so there is no demo or public repository.",
      },
    ],
  },

  snake: {
    descripcion:
      "Recreation of the classic Snake game made with HTML, CSS and JavaScript, playable on computer with the keyboard arrows, and on mobile devices with the buttons on the page's interface, plus navigation buttons to go back to the start screen or to the other available game.",
    caso: [
      {
        titulo: "Why I made it",
        texto:
          "I made it to study and learn HTML, CSS and JavaScript better. It's a practice project and has no deeper background than that.",
      },
      {
        titulo: "What it does",
        lista: [
          "Recreates the classic Nokia Snake game.",
          "On computer it's played with the keyboard arrows.",
          "On the phone it's played with the on-screen buttons.",
          "It has buttons to go back to the start screen or to the other available game.",
        ],
      },
      {
        titulo: "How it's made",
        texto: "HTML for structure, CSS for appearance and JavaScript for the game logic.",
      },
    ],
  },

  "self-checkout": {
    descripcion:
      "Mobile application with login through organizational email, meant for delivering accessories to employees, and on the administrative side the database keeps control of the items obtained.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "During my professional internship at John Deere, getting an IT accessory was a slow process. Each step depended on a different person.",
        lista: [
          "A ticket was opened in the internal ticketing platform.",
          "The ticket reached the global team and from there passed to the local team.",
          "An IT member reviewed the ticket manually and contacted the person.",
          "Both agreed on a time to meet and hand over the accessory.",
          "On delivery, IT closed the ticket.",
        ],
      },
      {
        titulo: "Result",
        texto:
          "An app built in Microsoft PowerApps reduced that process from 1 to 2 weeks to about 10 seconds on average.",
        cifras: [
          { valor: "1–2 weeks", etiqueta: "with the ticket process" },
          { valor: "~10 seconds", etiqueta: "with the app, on average" },
        ],
      },
      {
        titulo: "How it worked",
        texto:
          "The person identified themselves with their badge, the app queried an internal SQL employee database and recorded the delivery of the accessory, with no tickets or appointments in between. On the administrative side, the database allowed tracking the items delivered.",
      },
      {
        titulo: "The Java version",
        texto:
          "Later I recreated the application, mainly in Java, for a university project. This version has login with organizational email and the same goal. It was created only as an example, so its database no longer works and won't be restored; that's why it has no demo.",
      },
      {
        titulo: "What I learned",
        lista: [
          "With the original app I learned how PowerApps works, since it was my first time using it, and I also had contact with Visual Basic.",
          "The internal database gave me my first contact and interaction with SQL.",
          "Recreating the app on Android helped me understand Java, a language I only knew superficially.",
        ],
      },
    ],
  },

  "orexa-panel": {
    descripcion:
      "Administration panel for Minecraft servers with support for multiple server types, with a file explorer able to read text files, a page for managing and controlling plugins/mods, and Docker compatibility for easier access.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "Panels for Minecraft servers tend to fall into one of two extremes: they come loaded with features a personal server doesn't need (multi-user, role-based permissions and other administration layers), or they fall short on something basic.",
      },
      {
        titulo: "The idea",
        texto:
          "Installing it should be trivial: you clone the repository, run a single command, log in and start creating servers. No paid plans and no prior configuration.",
      },
      {
        titulo: "What it does",
        lista: [
          "Creates and controls several servers (Vanilla, Paper, Spigot, Purpur, Folia, Fabric, Forge, NeoForge and Velocity) and lets you import or clone an existing one.",
          "Live console over WebSocket and CPU and RAM metrics.",
          "File explorer with search, editing, upload and download.",
          "Plugin and mod management: upload, enable or disable, and check for updates.",
          "Scheduled backups with restore, plus logs and crash reports.",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "Go backend with a REST and WebSocket API, React frontend with TypeScript, and a Docker container that includes JDK 17, 21 and 25, chosen automatically according to the server's type and version.",
      },
      {
        titulo: "Decisions",
        lista: [
          "It works with default values; advanced configuration is optional through environment variables.",
          "While the default password is still active, protected actions stay locked until it is changed.",
          "Passwords with Argon2id, CSRF protection and file paths contained within each server.",
          "Deleting files, backups or logs asks for confirmation and leaves 3 seconds to undo.",
        ],
      },
    ],
  },

  nitori: {
    descripcion:
      "All-in-one Discord bot with no paid features. It understands natural language: an AI router proposes a typed plan and the code validates it against Discord's real state before running it. Includes moderation, football, images, link reading, reminders and more.",
    ahora: "AI redesign (router with typed plans and prompt cache) in the dev branch.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "A Discord community usually ends up gathering several bots, each with paid features locked, just to moderate, chat, translate and look up data.",
      },
      {
        titulo: "The idea",
        texto:
          "A single bot, with no premium features: you add it to your server (or run it yourself), use /setup and you're done. The AI is a natural-language entry point, not a replacement for commands: everything still works with slash and prefix, and when asked in words the AI runs the same functions, even several steps in one message.",
      },
      {
        titulo: "What it does",
        lista: [
          "Moderation of messages, users, channels and roles, also by asking in natural language if you have the corresponding permission.",
          "AI conversation, image generation, editing and analysis, and native Discord voice messages when requested.",
          "Football information based on API-Football: teams, players, matches, standings, top scorers, injuries, lineups, odds, predictions and live tracking.",
          "Link reading: summarize, explain, compare or verify their content.",
          "Translation into any language, code execution, reminders, memes, Minecraft server status, birthdays and anniversaries.",
          "Structured per-server memory, with style rules that only trusted administrators can change.",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "Python 3.11 or higher with SQLite. A model acts as a router: it returns a typed plan with the functions to run, their data and their order. The code validates authorization, identity, scope and dependencies against Discord's real state before running anything; if it rejects the plan, the router gets a chance to correct it. The final answer is written only from trusted results. Users' code runs in its own runner, and JavaScript-heavy pages are read with Playwright, optionally.",
      },
      {
        titulo: "Decisions",
        lista: [
          "Permissions come from Discord's real state, never from what a message says.",
          "Everything that changes the server needs the real permission, is fully validated before running and is never retried or reverted automatically.",
          "Football answers are validated against API-Football instead of letting the model guess.",
          "It doesn't listen to the whole channel: it answers only if mentioned, if a message of its own is replied to, or if it continues a recent conversation with the same user.",
          "Web search is off by default and is only used when the question needs current information.",
        ],
      },
      {
        titulo: "Fun fact",
        texto: [
          "Each message goes first through the router, a model call with about 15,000 tokens of fixed instructions. At the start that call read only 128 tokens from cache. I reordered the request so that what is fixed goes first and what changes per message goes last, and added cache keys.",
          "With a warm cache, most of that input is read from cache and the call costs about a third. The saving isn't immediate: after a while without use or after a restart, the first messages pay full price. The figures come from real logs at the model's current price.",
        ],
        cifras: [
          { valor: "~15,000", etiqueta: "tokens per router call" },
          { valor: "~91%", etiqueta: "of the input read from cache" },
          { valor: "0.022 → 0.007 USD", etiqueta: "cost of a router call" },
        ],
        enlaces: [{ texto: "The change on GitHub" }, { texto: "The cache tests" }],
      },
      {
        titulo: "Current status",
        texto:
          "This AI redesign lives in the dev branch, which is still work in progress and is not in the main branch.",
        enlaces: [{ texto: "See the dev branch" }],
      },
    ],
  },

  "simple-voice-app": {
    descripcion:
      "Android app built with Flutter for Minecraft Bedrock players: it lets you join SimpleVoice-Geyser's voice chat and server chat without using the browser. I'm its lead developer.",
    ahora: "Version 1.1.0 in the dev branch: Minecraft interface and languages.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "Minecraft Bedrock players, mostly on console, could only join SimpleVoice-Geyser's voice chat from its web interface. That forced a choice between opening it in the phone's browser or using a separate laptop or computer. For a long console gaming session, neither option is comfortable.",
      },
      {
        titulo: "How it started",
        texto:
          "Since I had already contributed to the plugin, I started thinking about developing an official app. When I saw a user in the plugin's forum asking for an official app, I decided to take the initiative and start building it myself.",
      },
      {
        titulo: "The idea",
        texto:
          "An Android app that connects directly to the server and works like a call: you enter server, user and password, and talk with an open mic, muted or push-to-talk.",
      },
      {
        titulo: "What it does",
        lista: [
          "Native Android audio capture and playback, with an option to output through earpiece or speaker.",
          "Foreground call notification with controls to mute, switch to speaker, hang up and reply to chat.",
          "Voice and chat tabs, a local audio test and a connection diagnostics panel.",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "Interface in Flutter and Dart with native Android audio underneath. It connects over websocket directly to SimpleVoice-Geyser's /ws route, which the app calculates from the server field and which works with subpaths and ports.",
      },
      {
        titulo: "Decisions",
        lista: [
          "For the app to work I also modified the plugin: protocol support for Android clients (PR #64).",
          "I also contributed subpath support for reverse proxy, spatial audio and persistent authentication (PR #45).",
        ],
      },
    ],
  },

  hostra: {
    descripcion:
      "Dashboard to keep control of a home Linux server: CPU, memory, storage and drive health, network and ports, systemd services and Docker containers, with alerts that say what's wrong and what to do. Designed for a single owner and a single server; the Android app is published separately as Hostra Companion.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "When you're the only owner of a home server, to find out what is happening inside you usually have two options: plug in a monitor, keyboard and mouse directly, or connect over SSH from another computer and type commands to find out.",
      },
      {
        titulo: "The idea",
        texto:
          "Hostra turns what is usually found out through commands into a clear, live dashboard. From the browser or from the app on your phone you see at a glance how your server is doing, what is failing and what to do about it and, only if you allow it, act on it, without connecting over SSH or typing commands for every check.",
      },
      {
        titulo: "What it does",
        lista: [
          "Shows CPU, memory, storage (with a forecast of when each volume will fill up) and drive health.",
          "Shows the network and ports with their owner, systemd services with their logs, Docker containers and a summary of Zoraxy, the reverse proxy, traffic.",
          "Its alerts say what happened, show the evidence and point to what to do about it.",
          "Only if you allow it, it can start, stop and restart services and containers, and do safe space clean-ups.",
          "The Android app, Hostra Companion, offers the same from the phone, with alert notifications and a terminal.",
        ],
      },
      {
        titulo: "How it's made",
        texto: [
          "A Go agent runs as a normal user on the Linux server with systemd and serves the dashboard, built with React and TypeScript, which comes built in: there is nothing else to run. State is stored in SQLite.",
          "The little that needs root permissions is done by five tiny separate programs: drive health, clean-up, policy, port owners and terminal. systemd starts each one only when a request arrives, from a socket that only the agent's account can use, and each accepts a single kind of request.",
        ],
      },
      {
        titulo: "Decisions",
        lista: [
          "By default the dashboard only observes: no action on the server is allowed until you enable it.",
          "What Hostra may do is defined by a policy file that only root can write. The installer creates one that allows nothing; permissions are granted in Settings and sensitive actions ask you to type the name first.",
          "It's designed for a single owner and a single server, not for fleets: each browser or phone pairs once with a code.",
          "The installer explains what it is going to do and asks before changing anything, and lets you review the steps without running them.",
          "The terminal is for quick checks, not to replace SSH: it runs in its own systemd unit as a throwaway user, with no groups or sudo, with the system read-only and memory and time limits.",
        ],
      },
      {
        titulo: "Current status",
        texto:
          "Version 1.0.0, with the code public on GitHub under the MIT license. There are no binaries to download: it's built on the server itself with the installer. The Android app is a separate project, Hostra Companion.",
        enlaces: [
          { texto: "Hostra Dashboard on GitHub" },
          { texto: "Hostra Companion, the Android app" },
          { texto: "Zoraxy, the reverse proxy Hostra summarizes" },
        ],
      },
    ],
  },

  "hostra-companion": {
    descripcion:
      "Android app built with Flutter to watch and manage from your phone a Linux server running Hostra: services, containers, storage, network, alerts with notifications and a terminal, with the connection protected by a client certificate and a pairing code.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "Hostra's dashboard lives on your home network on purpose: it's plain HTTP and only opens from there. That leaves a gap when you're not at home and something fails on the server.",
      },
      {
        titulo: "The idea",
        texto:
          "Hostra Companion puts the dashboard in your pocket: it shows what your server is doing, tells you in plain words when something is wrong and, only if you allow it, lets you act: restart a service, pause a container, free up space or open a terminal. It's an app for a single owner and their own server: there is no account, no cloud service, and no prebuilt download.",
      },
      {
        titulo: "What it does",
        lista: [
          "Overview: health, CPU, memory, storage, network, sensors, favorite services and the most recent alerts.",
          "systemd services with search and filters, and detail with state, memory and log; if you allow it, start, stop or restart them.",
          "Docker containers: restart, pause, resume or stop, with their image, uptime, memory and health.",
          "Storage with usage history, disk scan and a guide to free up space; network and ports, with who owns each port.",
          "Alerts with the evidence, filters by severity and history, and notifications on the phone.",
          "A real terminal on the server, protected with your fingerprint or screen lock.",
          "Administration from the phone (devices, control policy, configuration checks and activity log), off by default.",
        ],
      },
      {
        titulo: "How it's made",
        texto: [
          "It's built with Flutter and Dart for Android. It never talks directly to the server over the internet: the phone calls a public name on Cloudflare, Cloudflare checks the phone's client certificate (mutual TLS) and a Cloudflare Tunnel carries the request to the Hostra service, which only listens on the machine itself.",
          "Notifications go through Google's Firebase, in a project of your own. Google can read each alert's title and detail in transit, and the app explains this before enabling them.",
        ],
      },
      {
        titulo: "Decisions",
        lista: [
          "Two locks: a client certificate (Cloudflare) and a device token that only exists after pairing the phone with a one-time code. Removing a phone in the dashboard ends its session within seconds, even with a terminal open.",
          "The certificate's key is created in the Android Keystore and cannot be exported. If you clear the app's data or uninstall it, the key is deleted and you register again.",
          "The app remembers the server's identity and refuses to connect if the address answers with a different one.",
          "Everything that changes the server starts off. The phone's two switches (administer and terminal) can only be changed from the dashboard on your home network, never from the phone itself.",
          "Each action is sent once and is not repeated by itself after an uncertain result; what was done and from which phone is kept in Recent activity.",
          "There is no prebuilt download on purpose: notifications and the secure connection depend on your Firebase project and your certificate, so everyone builds their own.",
        ],
      },
      {
        titulo: "Limits",
        lista: [
          "Android 11 or higher, arm64 and Google Play services. A single paired server per app.",
          "Each phone needs its own certificate and its own fingerprint in the Cloudflare rule.",
          "The terminal allows one session per phone and two in total, ends after 10 minutes without activity and at 60 at most.",
          "There is no web version, no iOS app and no store listing.",
        ],
      },
      {
        titulo: "How to install it",
        texto:
          "There are two paths that lead to the same result: follow the SETUP.md guide step by step, or open the repository with a coding assistant and ask it to read AGENTS.md. The assistant guides you, asks before touching your server, your domain or your Firebase account, and never asks for your secrets.",
      },
      {
        titulo: "Current status",
        texto:
          "Version 1.0.0, with the code public on GitHub under the MIT license. It's the companion app of Hostra Dashboard.",
        enlaces: [{ texto: "Hostra Companion on GitHub" }, { texto: "Hostra Dashboard, the dashboard it controls" }],
      },
    ],
  },

  playerping: {
    descripcion:
      "Mod for Minecraft Java that gets a user's ping, showing with a color indicator whether it is excellent, good, fair, bad or terrible.",
    caso: [
      {
        titulo: "The problem",
        texto:
          "PingPlayer, HoneyBerries' original plugin, only worked on plugin-based servers. Servers with mods couldn't use it.",
      },
      {
        titulo: "The idea",
        texto:
          "Bring that same functionality to servers with mods. The original idea is HoneyBerries'; my contribution is the port to Fabric and NeoForge.",
      },
      {
        titulo: "What it does",
        lista: [
          "/ping command to see latency, and /ping with a player for administrators.",
          "/ip command to see your own public IP, and /ip with a player for administrators only.",
          "Color indicator in the commands and in the player list: excellent, good, fair, bad or terrible.",
          "Editable thresholds with overlap validation, applied instantly.",
          "Debug mode and diagnostic report generation.",
          "Works only on the server side: players don't need to install anything.",
        ],
      },
      {
        titulo: "How it's made",
        texto:
          "Java, with one project for Fabric and another for NeoForge. It was validated on Minecraft 1.21 and 1.21.11, and recognizes as administrators Minecraft operators, those with the playerping.admin permission and LuckPerms roles with enough weight.",
      },
      {
        titulo: "Credits",
        texto:
          "The original plugin is HoneyBerries' work. This project is a port to mods and wouldn't exist without that idea.",
        enlaces: [{ texto: "Original PingPlayer, by HoneyBerries" }],
      },
    ],
  },
};
