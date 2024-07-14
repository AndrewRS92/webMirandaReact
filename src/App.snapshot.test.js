// src/App.snapshot.test.js
import renderer from "react-test-renderer";
import App from "./App";

test("renders App component", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      <div
        className="LayoutContainer"
      >
        <header
          className="HeaderContainer"
        >
          <header>
            <button
              onClick={[Function]}
            >
              Menu
            </button>
            <h1>
              Dashboard
            </h1>
          </header>
        </header>
        <main
          className="MainContent"
        >
          <div
            className="PageContentWrapper"
          >
            <div>
              <h1>
                Kaliteye hoşgeldiniz
              </h1>
              <p>
                false
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  `);
});
