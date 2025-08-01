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
              <a href="br.org.hsl.siriolibanes" style={{
                fontWeight=800,
                fontSize=52,
                color="#FFF"
              }}>TEST LINK</a>
            </Content>
            <Contact />
          </ErrorBoundary>
        </S.Layout>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
