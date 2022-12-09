import { expect, test } from "@playwright/experimental-ct-react";
import { MessagePermissionsRequiredItem } from "./MessagePermissionsRequiredItem";

test.describe("MessagePermissionsRequiredItem", () => {
  test("renders", async ({ mount }) => {
    const component = await mount(<MessagePermissionsRequiredItem />);
    expect(component).toBeTruthy();
  });

  test("shows text", async ({ mount }) => {
    const text = "One of the following permissions is required";
    const component = await mount(<MessagePermissionsRequiredItem>{text}</MessagePermissionsRequiredItem>);
    await expect(component).toContainText("Permissions Required");
    await expect(component).toContainText(text);
  });
});
