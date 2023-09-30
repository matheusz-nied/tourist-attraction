import pino from "pino";
import config from "config";

export const logger = pino({
  level: config.get("App.logger.level"),
  enabled: config.get("App.logger.enabled"),

  transport: {
    target: "pino-pretty",
    
  },
});
