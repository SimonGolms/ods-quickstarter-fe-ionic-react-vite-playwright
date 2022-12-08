import { expect, test } from "@playwright/experimental-ct-react";
import { MessageAccessRestricted } from "./MessageAccessRestricted";

test.describe("MessageAccessRestricted", () => {
  test("renders", async ({ mount }) => {
    const component = await mount(<MessageAccessRestricted />);
    expect(component).toBeTruthy();
  });

  test("shows text", async ({ mount }) => {
    const text = "Only user with role have access";
    const component = await mount(<MessageAccessRestricted>{text}</MessageAccessRestricted>);
    await expect(component).toContainText("Access Restricted");
    await expect(component).toContainText(text);
  });
});
