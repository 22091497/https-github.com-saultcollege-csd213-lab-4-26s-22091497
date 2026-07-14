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
The tool gave me step-by-step layout suggestions for debugging cross-origin errors and helped clarify how routing architectures flow together. However, relying on auto-generated syntax blocks can reduce my focus on fixing syntax problems by hand, so I manually checked the logic blocks to make sure I understood the setup.

---

### 6.2 AI Tool Usage Disclosure
I utilized an AI helper to understand cross-origin concept failures, organize template strings inside loop logic blocks, and structure the server route forwarding setup.

* **Tool Configuration:** Gemini Assistant
* **Implementation Focus:** Used for debugging stream pipe issues and structural answers formatting.