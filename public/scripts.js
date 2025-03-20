const iconNames = [
    'Ableton', 'ActivityPub', 'Actix', 'Adonis', 'AfterEffects', 'AiScript', 'AlpineJS', 'Anaconda', 'AndroidStudio', 'Angular',
    'Ansible', 'Apollo', 'Apple', 'Appwrite', 'Arch', 'Arduino', 'Astro', 'Atom', 'Audition', 'AutoCAD',
    'AWS', 'Azure', 'Babel', 'Bash', 'Bevy', 'BitBucket', 'Blender', 'Bootstrap', 'BSD', 'Bun',
    'C', 'Cassandra', 'CLion', 'Clojure', 'Cloudflare', 'CMake', 'CodePen', 'CoffeeScript', 'CPP', 'Crystal',
    'CS', 'CSS', 'Cypress', 'D3', 'Dart', 'Debian', 'DENO', 'DevTo', 'Discord', 'DiscordBots',
    'DiscordJS', 'Django', 'Docker', 'DotNet', 'DynamoDB', 'Eclipse', 'Elasticsearch', 'Electron', 'Elixir', 'Elysia',
    'Emacs', 'Ember', 'Emotion', 'ExpressJS', 'FastAPI', 'Fediverse', 'Figma', 'Firebase', 'Flask', 'Flutter',
    'Forth', 'Fortran', 'GameMakerStudio', 'Gatsby', 'GCP', 'Gherkin', 'Git', 'Github', 'GithubActions', 'GitLab',
    'Gmail', 'Godot', 'GoLang', 'Gradle', 'Grafana', 'GraphQL', 'GTK', 'Gulp', 'Haskell', 'Haxe',
    'HaxeFlixel', 'Heroku', 'Hibernate', 'HTML', 'Htmx', 'Idea', 'Illustrator', 'Instagram', 'IPFS', 'Java',
    'JavaScript', 'Jenkins', 'Jest', 'JQuery', 'Julia', 'Kafka', 'Kali', 'Kotlin', 'Ktor', 'Kubernetes',
    'Laravel', 'LaTeX', 'Less', 'LinkedIn', 'Linux', 'Lit', 'Lua', 'Markdown', 'Mastodon', 'MaterialUI',
    'Matlab', 'Maven', 'Mint', 'Misskey', 'MongoDB', 'MySQL', 'NeoVim', 'NestJS', 'Netlify',
    'NextJS', 'Nginx', 'Nim', 'Nix', 'NodeJS', 'Notion', 'Npm', 'NuxtJS', 'Obsidian', 'OCaml',
    'Octave', 'OpenCV', 'OpenShift', 'OpenStack', 'p5js', 'Perl', 'Photoshop', 'PHP', 'PhpStorm', 'Pinia',
    'Pkl', 'Plan9', 'PlanetScale', 'Pnpm', 'PostgreSQL', 'Postman', 'Powershell', 'Premiere', 'Prisma', 'Processing',
    'Prometheus', 'Pug', 'PyCharm', 'Python', 'PyTorch', 'QT', 'R', 'RabbitMQ', 'Rails', 'RaspberryPi',
    'React', 'ReactiveX', 'RedHat', 'Redis', 'Redux', 'Regex', 'Remix', 'Replit', 'Rider', 'RobloxStudio',
    'Rocket', 'RollupJS', 'ROS', 'Ruby', 'Rust', 'Sass', 'Scala', 'ScikitLearn', 'Selenium', 'Sentry',
    'Sequelize', 'Sketchup', 'Solidity', 'SolidJS', 'Spring', 'SQLite', 'StackOverflow', 'StyledComponents', 'Sublime', 'Supabase',
    'Svelte', 'SVG', 'Swift', 'Symfony', 'TailwindCSS', 'Tauri', 'TensorFlow', 'Terraform', 'ThreeJS', 'Twitter',
    'TypeScript', 'Ubuntu', 'Unity', 'UnrealEngine', 'V', 'Vala', 'Vercel', 'VIM', 'VisualStudio', 'Vite',
    'Vitest', 'VSCode', 'VSCodium', 'VueJS', 'Vuetify', 'WebAssembly', 'Webflow', 'Webpack', 'WebStorm', 'WindiCSS',
    'Windows', 'Wordpress', 'Workers', 'XD', 'Yarn', 'Yew', 'Zig'
  ];
  
  // Check if an icon exists
  function checkIconExists(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }
  
  // Load and display icons
  async function loadIcons() {
    const iconListDiv = document.getElementById('icon-list');
    iconListDiv.innerHTML = ''; // Clear existing icons
  
    for (const icon of iconNames) {
      const iconDiv = document.createElement('div');
      iconDiv.className = 'icon-item';
      iconDiv.setAttribute('data-name', icon.toLowerCase());
  
      const lightImg = document.createElement('img');
      const lightUrl = `/icons/${icon}-Light.svg`;
      const defaultUrl = `/icons/${icon}.svg`;
  
      const exists = await checkIconExists(lightUrl);
      lightImg.src = exists ? lightUrl : defaultUrl;
      lightImg.alt = `${icon}-Light`;
      lightImg.title = `${icon}-Light`;
      lightImg.onerror = () => {
        lightImg.src = 'data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#444"/><text x="50" y="50" font-size="12" text-anchor="middle" fill="#fff">Error</text></svg>';
      };
  
      const lightLabel = document.createElement('p');
      lightLabel.textContent = `${icon}-Light`;
  
      iconDiv.appendChild(lightImg);
      iconDiv.appendChild(lightLabel);
      iconListDiv.appendChild(iconDiv);
    }
  }
  
  // Filter icons based on search input
  function filterIcons() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const iconItems = document.querySelectorAll('.icon-item');
  
    iconItems.forEach((item) => {
      const iconName = item.getAttribute('data-name');
      item.style.display = iconName.includes(searchInput) ? 'block' : 'none';
    });
  }
  
  // Load icons when the page loads
  window.onload = () => {
    loadIcons();
  };