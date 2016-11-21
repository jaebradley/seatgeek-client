'use es6';

import Taxonomy from '../../../Taxonomy';
import TaxonomyField from '../../../TaxonomyField';
import TaxonomyQueryParameter from '../TaxonomyQueryParameter';

export default class TaxonomiesQueryBuilder {
  static build(taxonomies) {
    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an array');
    }

    let taxonomyQueryParameters = {};
    for (var i = 0; i < taxonomies.length; i++) {
      let taxonomy = taxonomies[i];

      if (!(taxonomy instanceof TaxonomyQueryParameter)) {
        throw new Error('all elements must be a TaxonomyQueryParameter');
      }

      let queryParameterName = taxonomy.buildParameterName();
      let queryParameterValues = [];

      if (queryParameterName in taxonomyQueryParameters) {
        queryParameterValues = taxonomyQueryParameters[queryParameterName];
      }

      queryParameterValues.push(taxonomy.getValue());
      taxonomyQueryParameters[queryParameterName] = queryParameterValues;
    }

    return taxonomyQueryParameters;
  }
}
