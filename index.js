const useLogger = require("./src/hooks/useLogger");
const main = () => {
	const logger = useLogger('Main');

	setTimeout(() => logger.log_info('hello', 1234), 1000);
	setTimeout(() => logger.log_warn('hello', 1234), 2000);
	setTimeout(() => logger.log_error('hello', 1234), 3000);
}

main();
