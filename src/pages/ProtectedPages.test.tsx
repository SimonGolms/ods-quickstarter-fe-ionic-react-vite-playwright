import { expect, test } from "@playwright/experimental-ct-react";
import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "../AppProviders";
import { MOCK_RESPONSE_MICROSOFT_GRAPH_GET_ME } from "../utils/test/api.me.mock";
import { MsalMock } from "../utils/test/MsalMock";
import { ProtectedPages } from "./ProtectedPages";

test.beforeEach(async ({ page }) => {
  await page.route("**/v1.0/me/", (route) => {
    return route.fulfill({
      body: JSON.stringify(MOCK_RESPONSE_MICROSOFT_GRAPH_GET_ME),
      contentType: "application/json",
      status: 200,
    });
  });
});

test.describe("ProtectedPages", () => {
  test("renders", async ({ mount }) => {
    const component = await mount(
      <BrowserRouter>
        <MsalMock>
          <AppProviders>
            <ProtectedPages />
          </AppProviders>
        </MsalMock>
      </BrowserRouter>
    );

    await expect(component).toContainText("Ready to create an app");
  });
});
