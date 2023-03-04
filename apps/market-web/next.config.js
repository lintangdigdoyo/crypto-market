// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  env: {
    API_TARGET_URL: process.env.API_TARGET_URL || "",
    API_BASE: process.env.API_BASE || "",
  },
};

module.exports = withNx(nextConfig);
