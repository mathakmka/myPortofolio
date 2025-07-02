import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routes/Router";
import { SkillProvider } from "./Component/SkillContext"; // ⬅️ tambahkan ini
import Nav from "./Component/Nav";

export default function App() {
  return (
    <SkillProvider>
      <BrowserRouter>
      <Nav/>
        <AppRouter />
      </BrowserRouter>
    </SkillProvider>
  );
}
