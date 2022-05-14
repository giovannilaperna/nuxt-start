import { Nuxt } from "nuxt-start"

import config from "./nuxt.config.js"

const nuxt = new Nuxt(config)

nuxt.listen(3000)
