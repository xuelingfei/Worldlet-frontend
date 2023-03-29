import SvgBackend from '@/assets/svg/backend.svg'
import SvgEn from '@/assets/svg/language-en.svg'
import SvgExit from '@/assets/svg/exit.svg'
import SvgExpand from '@/assets/svg/expand.svg'
import SvgFold from '@/assets/svg/fold.svg'
import SvgFullscreen from '@/assets/svg/fullscreen.svg'
import SvgFullscreenExit from '@/assets/svg/fullscreen-exit.svg'
import SvgUser from '@/assets/svg/user.svg'
import SvgZh from '@/assets/svg/language-zh.svg'
import { ArrowDown, ArrowUp, ChatRound, Clock, Monitor, Moon, Sunny, User } from '@element-plus/icons-vue'

const iconList = [
  { name: 'SvgBackend', component: SvgBackend },
  { name: 'SvgEn', component: SvgEn },
  { name: 'SvgExit', component: SvgExit },
  { name: 'SvgExpand', component: SvgExpand },
  { name: 'SvgFold', component: SvgFold },
  { name: 'SvgFullscreen', component: SvgFullscreen },
  { name: 'SvgFullscreenExit', component: SvgFullscreenExit },
  { name: 'SvgUser', component: SvgUser },
  { name: 'SvgZh', component: SvgZh },
  { name: 'ArrowDown', component: ArrowDown },
  { name: 'ArrowUp', component: ArrowUp },
  { name: 'ChatRound', component: ChatRound },
  { name: 'Clock', component: Clock },
  { name: 'Monitor', component: Monitor },
  { name: 'Moon', component: Moon },
  { name: 'Sunny', component: Sunny },
  { name: 'User', component: User },
]

const install = (app) => {
  for (let i = 0; i < iconList.length; i++) {
    app.component(iconList[i].name, iconList[i].component)
  }
}

export { iconList }
export default { install }
