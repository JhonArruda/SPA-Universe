import { Router } from './router.js'

// criando mapeamento de rotas e paginas
const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploration', "/pages/exploration.html")
router.add('/404', "/pages/404.html")

router.handle()
      
window.onpopstate = () => router.handle()
window.route = () => router.route()
window.information = () => router.information()
