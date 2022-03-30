import { ThreeDots } from 'react-loader-spinner'
import {Spinner} from './Loader.styled'

 const Loader = () => {
  return (
    <Spinner>
      <ThreeDots color="#3f51b5" height={80} width={80} />
    </Spinner> 
  )  
}

export default Loader;