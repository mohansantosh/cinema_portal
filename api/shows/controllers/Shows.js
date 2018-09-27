'use strict';

/**
 * Shows.js controller
 *
 * @description: A set of functions called "actions" for managing `Shows`.
 */

module.exports = {

  /**
   * Retrieve shows records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.shows.search(ctx.query);
    } else {
      return strapi.services.shows.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a shows record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.shows.fetch(ctx.params);
  },

  /**
   * Count shows records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shows.count(ctx.query);
  },

  /**
   * Create a/an shows record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shows.add(ctx.request.body);
  },

  /**
   * Update a/an shows record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shows.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shows record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shows.remove(ctx.params);
  }
};
