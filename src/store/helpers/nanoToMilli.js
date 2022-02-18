// A transformer of nanoseconds to milliseconds but can be used for other purposes as well

export const nanoToMilli = (nano) => Math.trunc(nano / 1000000);
