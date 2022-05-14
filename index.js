import { Nuxt } from "nuxt-start";

// Require nuxt config
import config from "./nuxt.config.js";

// Create a new nuxt instance (config needs dev: false)
const nuxt = new Nuxt(config);

// Start nuxt server
nuxt.listen(3000); // nuxt.listen(port, host)

// Or use `nuxt.render` as an express middleware
