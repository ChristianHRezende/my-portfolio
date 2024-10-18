import App from "./App";
import { testIds } from "./constants";
import { render, screen, waitFor } from "./testUtils";

function setup() {
  render(<App />);
}
describe("APP", () => {
  it.each(Object.values(testIds))(
    "must render elements by testId: %s ",
    async (testId: string) => {
      setup();
      const element = screen.getByTestId(testId);
      await waitFor(() => {
        expect(element).toBeInTheDocument();
      });
    }
  );
});
