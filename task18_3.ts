type AppConfig = {
  title: string;
  version: number;
  debug: boolean;
};

type ReadonlyOptionalAppConfig = {
  readonly [Property in keyof AppConfig as `app_${Property}`]?: AppConfig[Property];
};

const config1: ReadonlyOptionalAppConfig = {
  app_title: "My App",
  app_version: 1.0,
};

config1.app_title = "New Title";
