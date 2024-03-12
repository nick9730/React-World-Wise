import Sidebar from "../compomens/Sidebar"
import styles from './AppLayout.module.css'
import Map from "../compomens/Map"
import Button from "../compomens/Button"
import User from "../compomens/User"

export default function AppLayout() {



  return (
    <div className={styles.app}>
       <Sidebar/>
      <Map/>
      <User/>
       </div>
  )
}
