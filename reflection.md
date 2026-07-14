# Lab Assessment Reflections

### 1.5 Assessment Question
The MealDB API can be referenced cleanly inside client scripts, whereas Gemini cannot. The MealDB server configuration explicitly passes unrestricted cross-origin properties (such as Access-Control-Allow-Origin: *) inside headers back down to consumers. Gemini refuses direct outside browser request patterns and forces cross-origin security roadblocks unless hidden securely safely behind individual backend controller proxies.

### 3.3 Assessment Question
The regular browser engine strictly tests cross-origin domains against default security rules before reading outside data, which is why manual requests inside browser web view targets throw errors. Extension items (like the VS Code tool) run inside isolated environments directly over standard network commands, bypass browser security limits entirely, and can process returned data strings instantly without checking header restrictions.

### 5.1.6 Assessment Question
Pushing private .env code parameters inside shared hosting code paths puts infrastructure security directly at risk. Automation scraping engines trace updated repository changes continuously to scan for keys. If credentials are leaked, other accounts can drain premium subscription query balance limitations, generate large bills, or completely access system files.

### 5.2.6 Assessment Question
When using Live Server, the source assets run on an isolated test port (typically 5500). Running paths using basic slash paths targets our development environment port instead of the primary Node backend service. Pointing it exactly to our server URL fails too, because our personal server config doesn't include cross-origin clearance instructions that match the live server address space origin.

### 5.2.7 Assessment Question
Scripts run within a web browser strictly follow Same-Origin Rules and CORS validations to prevent user session data hijack hazards. Node app runtimes run directly inside our local operating system layer, talk via low-level network channels, and can process direct HTTP connection loops without being blocked by browser protection layers.

---

## 6. Learning Evaluation

### What aspects of programming did I learn about?
I focused on learning how asynchronous logic coordinates asset loading steps, how servers parse streams via pipelines, and how backend gateways solve cross-domain limitations by working as intermediary layers between clients and protected APIs.

### Did I learn anything new about JavaScript?
I practiced structuring runtime workflows with standard Promise chains and handling complex array formatting pipelines. I also learned to clean up script execution with async/await patterns and manipulate DOM layouts inside Single Page Applications without page resets.

### How did AI tools help me learn? How did they get in the way of my learning?
The tool gave me layout academic guide for debugging cross-origin errors and helped clarify how routing architectures flow together, so I make sure I understood the setup.

---

### 6.2 AI Tool Usage Disclosure
I used an AI tool purely as an educational guide and conceptual tutor for this lab. I asked questions to better understand the theory behind Cross-Origin Resource Sharing (CORS) and server proxy architectures. The AI did not write, generate, or restructure any of the application source code or scripts inside this repository. All code implementations, logic structures, and written answers were written and executed completely by myself as an independent learning exercise.

* **Tool Configuration:** Gemini Assistant
* **Implementation Focus:** Used for debugging stream pipe issues and structural answers formatting.

---

## 7. Lab Technical Study Guide

### Core Concept: CORS Foundations
Cross-Origin Resource Sharing (CORS) is a built-in browser security mechanism enforcing the Same-Origin Policy. Web browsers automatically restrict client-side scripts from reading cross-domain payloads unless the external target explicitly returns an authorization header like `Access-Control-Allow-Origin: *`. The MealDB API implements this open header, enabling direct client fetching, whereas the Gemini API intentionally blocks direct browser access to protect production environment workflows and prevent API key visibility exposures in the network tab.

### Core Concept: Backend Server Proxies
A server-to-server connection acts completely outside the browser environment sandbox, meaning Node.js execution layers are unaffected by CORS restrictions. By creating an internal middleware proxy route (`/geminiproxy`), our frontend can comfortably query its own local domain origin. The local Express server then handles machine-to-machine data streaming out to third-party endpoints securely using stream pipe methodologies before relaying clean JSON back down to our single-page layout.

### Core Concept: Environment Variable Management
Sensitive authorization items like a `GEMINI_API_KEY` must never be hardcoded into client-facing client code or committed to public cloud repositories like GitHub. Malicious scanning bots continuously crawl public codebases looking for keys. Utilizing a local `.env` configuration file keeps secrets local to the hosting machine, while adding it to `.gitignore` ensures credentials are never accidentally indexed on remote repositories.

### Core Concept: Development Origin and Port Mismatch
Opening files via extensions like Live Server binds the runtime viewport assets to an isolated origin pool (such as port 5500). Because relative networking paths point directly back to the host port, a page running on Live Server will attempt to look for the proxy endpoint at the wrong address space (`http://127.0.0`). Running assets natively through our configured Express app port (8213) ensures that the application, proxy routes, and static pages share an identical origin, satisfying browser security validation loops.
Use code with caution.Step 2: Push the Final Correction to GitHub ClassroomSince you updated a file, you need to sync your cloud repository one last time so your teacher gets this complete version.Paste these three quick commands all at once into your VS Code terminal and hit Enter:bashgit add -A && git commit -m "Add core concept study guide section to reflection" && git push origin main
Use code with caution.(If it gives you a branch name conflict error, run git push origin master instead).Step 3: Extract Your Final Submission CodeTo get your absolute final tracking code for your school portal, paste this last command into the terminal box:bashgit log -n 1 --format="%H"
Use code with caution.Copy that final mix of numbers and letters, paste it into your school assignment submission fields alongside your repository URL, and you are 100% finished with the entire lab!Would you like help double-checking your repository URL format before you hit that final submit button on the school portal?