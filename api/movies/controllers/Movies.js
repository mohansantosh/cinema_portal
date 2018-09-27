'use strict';

/**
 * Movies.js controller
 *
 * @description: A set of functions called "actions" for managing `Movies`.
 */

module.exports = {

  /**
   * Retrieve movies records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.movies.search(ctx.query);
    } else {
      return strapi.services.movies.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a movies record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.movies.fetch(ctx.params);
  },

  /**
   * Count movies records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.movies.count(ctx.query);
  },

  /**
   * Create a/an movies record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.movies.add(ctx.request.body);
  },

  /**
   * Update a/an movies record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.movies.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an movies record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.movies.remove(ctx.params);
  }
};
