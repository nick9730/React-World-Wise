
import styles from './CityList.module.css'
import Spinner from '../compomens/Spinner'
import CityItem from '../compomens/CityItem'
import Message from '../compomens/Message'
import { useCities } from '../contexts/CitiesContexts'


export default function CityList() {
  
  const {cities,isLoading} = useCities();
  
  if(isLoading) {return (<Spinner/>)}
  
   if(!cities.length) return (<Message message='Add your first city by clicking on a cit on a map '/>)
  console.log(cities)
    return(
        <ul className={styles.cityList}>
          {cities.map((city)=> <CityItem city={city} key={city.id}/>)}
        </ul>
    )
}
