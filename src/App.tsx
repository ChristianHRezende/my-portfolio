import { ConfigProvider, App as AntApp } from "antd";
import { theme } from "./theme";
import * as S from "./App.styles";
import {
  Contact,
  Experience,
  ExperiencesWith,
  Header,
  Projects,
  Welcome,
} from "./layers";
import { Content, ErrorBoundary } from "./components";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AntApp>
        <S.Layout>
          <ErrorBoundary>
            <Header />
            <Content>
              <Welcome />
              <ExperiencesWith />
              <Projects />
              <Experience />
            </Content>
            <Contact />
          </ErrorBoundary>
        </S.Layout>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
