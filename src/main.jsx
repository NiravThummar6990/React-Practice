import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Auth from './projects/auth/Auth'
import { BrowserRouter } from 'react-router-dom'
// import Post from './projects/post/Post'
// import { LoginprocesProvider } from './projects/post/provider/Loginemail'
// import LiveApi from './projects/liveAPI/liveApi'
// import { Rcuser } from './projects/liveAPI/provider/Rcuser'
import { Loginflw } from './projects/loginFlow/provider/Loginflw'
import LoginFlowProcess from './projects/loginFlow/loginFlowProcess'
import VehiclePass from './projects/vehiclePass/VehiclePass'
import Formforeigner from './projects/foreigners/Formforeigner'
import Vehicletxt from './projects/vehicleTaxtUser/Vehicletxt'
import GlobalProvider from './projects/vehicleTaxtUser/provider/GlobalProvider'
import Jewellery from './projects/jewellery/Jewellery'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
 {/* <Auth/> */}
 {/* <LoginprocesProvider > */}
 {/* </LoginprocesProvider > */}

 {/* <Rcuser>
 <LiveApi/>
 </Rcuser> */}

{/* <Loginflw>
  <LoginFlowProcess/>
</Loginflw> */}


{/* <VehiclePass/> */}

{/* <Formforeigner/>   */}

  {/* <GlobalProvider> */}
    {/* <Vehicletxt/> */}
  {/* </GlobalProvider> */}
 
  <Jewellery/>  

  </BrowserRouter>
  </StrictMode>
)


