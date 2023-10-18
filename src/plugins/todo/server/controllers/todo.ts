/**
 *  controller
 */

import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  find(ctx) {
    return strapi.plugin("todo").service("todo").find(ctx.query);
  },
});
