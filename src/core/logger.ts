import winston from "winston";

const USE_DEBUG = process.env.NODE_ENV !== "production";

const logger = winston.createLogger({
  level: USE_DEBUG ? "debug" : "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf(
          (info) => `[${info.level}][${info.label}] ${info.message}`,
        ),
      ),
    }),
  ],
});

export const getLogger = (label: string): winston.Logger =>
  logger.child({ label });

export default logger;
