'use strict';

/**
 * Cinemas.js controller
 *
 * @description: A set of functions called "actions" for managing `Cinemas`.
 */

module.exports = {

  /**
   * Retrieve cinemas records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.cinemas.search(ctx.query);
    } else {
      return strapi.services.cinemas.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a cinemas record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.cinemas.fetch(ctx.params);
  },

  /**
   * Count cinemas records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.cinemas.count(ctx.query);
  },

  /**
   * Create a/an cinemas record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cinemas.add(ctx.request.body);
  },

  /**
   * Update a/an cinemas record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cinemas.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cinemas record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cinemas.remove(ctx.params);
  }
};
