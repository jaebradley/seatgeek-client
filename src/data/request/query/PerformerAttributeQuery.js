'use es6';

import QueryParameterBuilder from './QueryParameterBuilder';

export default class PerformerAttributeQuery {
  constructor(ids, slug, primaryGenres, otherGenres, taxonomies, parentTaxonomies) {
    if (!(ids instanceof Array)) {
      throw new Error('ids must be an Array');
    }

    if ((typeof slug !== 'undefined') && (typeof slug !== 'string')) {
      throw new Error('defined slug must be String');
    }

    if (!(primaryGenres instanceof Array)) {
      throw new Error('primaryGenres must be an Array');
    }

    if (!(otherGenres instanceof Array)) {
      throw new Error('otherGenres must be an Array');
    }

    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    if (!(parentTaxonomies instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    this.ids = ids;
    this.slug = slug;
    this.primaryGenres = QueryParameterBuilder.buildGenreSlugs(primaryGenres);
    this.otherGenres = QueryParameterBuilder.buildGenreSlugs(otherGenres);
    this.taxonomyIds = QueryParameterBuilder.buildTaxonomyIds(taxonomies);
    this.parentTaxonomyIds = QueryParameterBuilder.buildTaxonomyIds(parentTaxonomies);
  }

  buildQueryParameters() {
    return {
      'id': this.ids,
      'slug': this.slug,
      'taxonomies.id': this.taxonomyIds,
      'taxonomies.parent_id': this.parentTaxonomyIds,
      'genres[primary].slug': this.primaryGenres,
      'genres.slug': this.otherGenres,
    }
  }
};
