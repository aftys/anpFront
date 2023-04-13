import './App.css'
import { Navbar, Sidebar } from './components'
import { useStateContext } from './context'
import { AnimatePresence } from 'framer-motion'
import { Schedule, ResponsibleTable, PortList, ShipTable } from './page'
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'

registerLicense('Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlliS3xRckNmX3hZeHU=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpSdEdhXXlbdnNcQmE=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0dhW3tYdXJdRmld;MTcwNDExOUAzMjMxMmUzMTJlMzMzNVpOdmpaT0Zva2ozWVhwS09WNStRVSswRGN4Nlk3SGFSR0RRUDVUak4xV0E9;MTcwNDEyMEAzMjMxMmUzMTJlMzMzNVZPNVVmWFNteGcwNjNFV1hsU2dZWnQrKzFWa3VZTDUrVGFOaHNWK1MrMG89;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckRhW31adnFTTmheUA==;MTcwNDEyMkAzMjMxMmUzMTJlMzMzNWJJbDB2dWd6SXhQZ3J5N1hvNFdQaXAzeDdRVjZvdnNsTkl6cm9PbURaeWs9;MTcwNDEyM0AzMjMxMmUzMTJlMzMzNVc3aUxDNUxiN3NnUmRmYml6UzhHM3NRQ1E2SE4xTXk1d1A5eXpRTXhxYkk9;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0dhW3tYdXJcTmdd;MTcwNDEyNUAzMjMxMmUzMTJlMzMzNU8xK3NZNVJoaVNsc2MxakZ5S0RCbE1zN1Ezb0dpQVNYZlZnQkJrMjc3MDQ9;MTcwNDEyNkAzMjMxMmUzMTJlMzMzNW9MTHVOVFJheG5DeEU3M3FJeTZQdDVRY29kakR5ZVJGT214VEliRDhqTWc9;MTcwNDEyN0AzMjMxMmUzMTJlMzMzNWJJbDB2dWd6SXhQZ3J5N1hvNFdQaXAzeDdRVjZvdnNsTkl6cm9PbURaeWs9')

export default function App() {
  const { activeMenu } = useStateContext()
  return (
    <div className="min-h-screen w-screen bg-white py-[100px]">
      <Navbar />
      <AnimatePresence>{activeMenu && <Sidebar />}</AnimatePresence>
      <BrowserRouter>
        <Routes>
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/test" element={<ResponsibleTable />} />
            <Route path="/ship" element={<ShipTable />} />
            <Route path="/list" element={<PortList />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
