import { ConfigProvider } from "antd";
import { theme } from "./theme";
import * as S from "./App.styles";
import { Header, Welcome } from "./layers";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <S.Layout>
        <Header />
        <Welcome />
      </S.Layout>
    </ConfigProvider>
  );
}

export default App;
