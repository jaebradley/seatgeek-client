import {expect} from 'chai';
import {Map} from 'immutable';

import GenreQuery from '../src/data/query/GenreQuery';

describe('Instantiate Genre Query', function() {
  it('Tests default genre query', function() {
    const defaultQuery = new GenreQuery();
    expect(defaultQuery.per_page).to.equal(10);
    expect(defaultQuery.page).to.equal(1);
  });

  it('Tests specific genre query', function() {
    const per_page = 100;
    const page = 1000;
    const specificQuery = new GenreQuery({
      per_page: per_page,
      page: page
    });
    expect(specificQuery.per_page).to.equal(per_page);
    expect(specificQuery.page).to.equal(page);
  });
});
