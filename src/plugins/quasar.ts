
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import { AppFullscreen, BottomSheet, Cookies, Dialog, Loading, Notify, Quasar } from 'quasar'

export function install({ use }) {
    use(Quasar, {
        plugins: { Notify, Dialog, Cookies, Loading, BottomSheet, AppFullscreen },
        config: {

        },
    })
}