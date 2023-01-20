import { expect, test } from "@playwright/experimental-ct-react";
import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "../../AppProviders";
import {
  MOCK_RESPONSE_MICROSOFT_GRAPH_GET_ME,
  MOCK_RESPONST_MICROSOFT_GRAPH_GET_USERS_PHOTOS_64_VALUE,
} from "../../utils/test/api.me.mock";
import { MsalMock } from "../../utils/test/MsalMock";
import { Avatar } from "./Avatar";

const { mail } = MOCK_RESPONSE_MICROSOFT_GRAPH_GET_ME;

test.describe("Avatar", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(`**/v1.0/users/${mail}/photos/64x64/$value`, async (route) => {
      return route.fulfill({
        body: Buffer.from(MOCK_RESPONST_MICROSOFT_GRAPH_GET_USERS_PHOTOS_64_VALUE, "base64"),
        contentType: "image/jpeg",
        status: 200,
      });
    });
  });

  test("renders photo with valid id", async ({ mount }) => {
    const component = await mount(
      <BrowserRouter>
        <MsalMock>
          <AppProviders>
            <Avatar id={mail} />
          </AppProviders>
        </MsalMock>
      </BrowserRouter>
    );
    await expect(component.locator("ion-skeleton-text")).toHaveAttribute("animated", "true");

    await component.page().waitForResponse("**/v1.0/users/**/photos/64x64/$value");

    await expect(component.locator("img")).toHaveAttribute("alt", `avatar-${mail}`);
    await expect(component.locator("img")).toHaveAttribute(
      "src",
      `data:image/jpeg;base64,${MOCK_RESPONST_MICROSOFT_GRAPH_GET_USERS_PHOTOS_64_VALUE}`
    );
  });

  test("renders avatar icon with invalid id", async ({ mount }) => {
    const component = await mount(
      <BrowserRouter>
        <MsalMock>
          <AppProviders>
            <Avatar id={`no-${mail}`} />
          </AppProviders>
        </MsalMock>
      </BrowserRouter>
    );
    await expect(component.locator("ion-skeleton-text")).toHaveAttribute("animated", "true");
    await component.page().waitForResponse("**/v1.0/users/**/photos/64x64/$value");
    await expect(component.locator("ion-icon")).toBeVisible();
  });
});
