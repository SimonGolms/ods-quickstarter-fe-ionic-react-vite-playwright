import { TechnologyStack } from "./TechnologyStack";
import {
  CI_CD,
  COMPILER,
  DEV_ENVIRONMENT,
  FRAMEWORKS_AND_LIBRARIES,
  HOSTING,
  IDE_EDITORS,
  LINTER,
  PROGRAMMING_LANGUAGE,
  TESTING,
  VERSION_CONTROL,
} from "./TechnologyStack.utils";

export const TechnologyStacks = () => {
  return (
    <>
      <TechnologyStack items={PROGRAMMING_LANGUAGE} title="Programming Language" />
      <TechnologyStack items={FRAMEWORKS_AND_LIBRARIES} title="Frameworks and Libraries" />
      <TechnologyStack items={TESTING} title="Testing" />
      <TechnologyStack items={LINTER} title="Linter" />
      <TechnologyStack items={COMPILER} title="Compiler" />
      <TechnologyStack items={CI_CD} title="CI/CD" />
      <TechnologyStack items={HOSTING} title="Hosting" />
      <TechnologyStack items={DEV_ENVIRONMENT} title="Dev Environment" />
      <TechnologyStack items={IDE_EDITORS} title="IDEs/Editors" />
      <TechnologyStack items={VERSION_CONTROL} title="Version Control" />
    </>
  );
};
