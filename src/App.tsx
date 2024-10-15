import { ConfigProvider, App as AntApp } from "antd";
import { theme } from "./theme";
import * as S from "./App.styles";
import { Contact, ExperiencesWith, Header, Projects, Welcome } from "./layers";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AntApp>
        <S.Layout>
          <Header />
          <Welcome />
          <ExperiencesWith />
          <Projects />
          <Contact />
        </S.Layout>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
