import { StrictMode, type ComponentType } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import MentionsLegales from "./pages/MentionsLegales.tsx"
import Confidentialite from "./pages/Confidentialite.tsx"
import CGV from "./pages/CGV.tsx"
import PolitiqueRGPD from "./pages/PolitiqueRGPD.tsx"

const legalRoutes: Record<string, ComponentType> = {
  "/mentions-legales": MentionsLegales,
  "/confidentialite": Confidentialite,
  "/cgv": CGV,
  "/politique-rgpd": PolitiqueRGPD,
}

function Root() {
  const Page = legalRoutes[window.location.pathname]
  if (Page) return <Page />
  return <App />
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
