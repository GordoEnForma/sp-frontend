import { FC } from "react"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const App: FC = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
