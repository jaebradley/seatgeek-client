# SeatGeek Client

[![Coverage Status](https://coveralls.io/repos/github/jaebradley/seatgeek-client/badge.svg?branch=master)](https://coveralls.io/github/jaebradley/seatgeek-client?branch=master)
[![Build Status](https://travis-ci.org/jaebradley/seatgeek-client.svg?branch=master)](https://travis-ci.org/jaebradley/seatgeek-client)

## Introduction
A JavaScript client that serves as an interface layer on top of the SeatGeek API.

It allows fetching genre, performer, taxonomy, venue, and event information.

## Installation
* `npm install seatgeek-client`
* NPMJS

## Usage
*** ALL ARGUMENTS ARE OPTIONAL UNLESS OTHERWISE SPECIFIED ***

#### Global Pagination Arguments

* `perPage`
  * Represents the number of records to return.
  * Default value is **100**.
* `page`
  * Represents the page to query.
  * Default value is **1**.


### Fetch Genres

```javascript
import {SeatGeekClient} from 'seatgeek-client';

let firstOneHundredGenresFromPage1 = SeatGeekClient.getGenres();
let firstTenGenresFromPage1 = SeatGeekClient.getGenres({perPage: 10});
let firstTenGenresFromPage2 = SeatGeekClient.getGenres({perPage: 10, page: 2});
```

### Fetch Taxonomies

```javascript
import {SeatGeekClient} from 'seatgeek-client';

let firstOneHundredTaxonomiesFromPage1 = SeatGeekClient.getTaxonomies();
let firstTenTaxonomiesFromPage1 = SeatGeekClient.getTaxonomies({perPage: 10});
let firstTenTaxonomiesFromPage2 = SeatGeekClient.getTaxonomies({perPage: 10, page: 2});
```

### Fetch Performers
```javascript
import {SeatGeekClient, Taxonomy, Genre} from 'seatgeek-client';

// this search will return all performers with
// id = 1 OR id = 2 OR id = 3
// slug = performer-slug-1 AND slug = performer-slug-2 (which should never happen)
// part of the NBA Taxonomy OR the Concert Taxonomy
// part of the Pop Genre AND the Classical Genre
// search on the response document for jaebaebae
let performersSearch = {
  ids: [1, 2, 3],
  slugs: ['performer-slug-1', 'performer-slug-2'],
  taxonomies: [Taxonomy.NBA, Taxonomy.CONCERT],
  genres: [Genre.POP, Genre.CLASSICAL],
  queryString: 'jaebaebae',
  perPage: 4,
  page: 5
};

let performers = SeatGeekClient.getPerformers(performersSearch);
```

#### Arguments

* `ids`
  * An array of performer ids to query for
  * An `or` search
  * Default value is an empty array
* `slugs`
  * An array of performer slugs to query for
  * An `and` search
  * Default value is an empty array
* `taxonomies`
  * An array of taxonomies to filter from
  * An `or` search
  * Default value is an empty array
* `genres`
  * An array of genres to filter from
  * An `and` search
  * Default value is an empty array
* `queryString`
  * A string to query against
  * Default behavior is an empty string


### Fetch Venues

```javascript
import {SeatGeekClient, Unit} from 'seatgeek-client';

// this search will return all venues with
// id = 1 OR id = 2 OR id = 3
// various location information (cityName, stateCode, etc.)
// use the ip address as the location to search venues on
// use the specified latitude and longitude
// only look for venues within a 6 mile radius
let venuesSearch = {
  ids: [1, 2 , 3],
  cityName: 'Boston',
  stateCode: 'MA',
  countryCode: 'USA',
  postalCode: '02122',
  queryString: 'WICKED PISSAH DOOD',
  useIpAddress: true,
  latitude: 4,
  longitude: 5,
  range: 6,
  unit: Unit.MILE,
  perPage: 7,
  page: 8,
};

let venues = SeatGeekClient.getVenues(venuesSearch);
```

#### Arguments

* `ids`
  * An array of venue ids to query for
  * Default value is an empty array
* `cityName`
  * A string representing a city name
  * Default value is an empty string
* `stateCode`
  * A string representing the ISO state code
  * Default value is an empty string
* `countryCode`
  * A string representing the ISO country code
  * Default value is an empty string
* `useIpAddress`
  * A boolean representing whether or not to use the IP address location to search for venues
  * Default value is `false`
* `latitude` and `longitude`
  * Use coordinates to search for venues
  * Cannot specify just `latitude` or `longitude`
* `range`
  * An integer representing the search radius distance
  * Default value is `10`
* `unit`
  * An enum representing the search radius distance unit
  * Default value is `Unit.MILE` because fuck you, rest of the world, with your logical unit system.

### Fetch Events

```javascript
import {SeatGeekClient, PerformerField, PerformerSpecificity, Taxonomy, TaxonomyField, Unit, SortOption, SortDirection, FilterOption, Operator} from 'seatgeek-client';

let query = {
  ids: [1, 2, 3, 4],
  venues: {
    ids: [5, 6, 7],
    cityName: 'Boston',
    stateCode: 'MA',
    countryCode: 'US',
    postalCode: '02144'
  },
  performers: [
    {
      field: PerformerField.ID,
      specificity: PerformerSpecificity.ANY,
      value: 8
    },
    {
      field: PerformerField.SLUG,
      specificity: PerformerSpecificity.PRIMARY,
      value: 'boston-celtics'
    }
  ],
  taxonomies: [
    {
      taxonomy: Taxonomy.NBA
    },
    {
      taxonomy: Taxonomy.CONCERTS,
      field: TaxonomyField.PARENT_ID,
    }
  ],
  filters: [
    {
      option: FilterOption.AVERAGE_PRICE,
      operator: Operator.LESS_THAN,
      value: 9
    },
    {
      option: FilterOption.LISTING_COUNT,
      operator: Operator.GREATER_THAN_OR_EQUAL_TO,
      value: 10
    }
  ],
  geolocation: {
    useIpAddress: false,
    latitude: 10,
    longitude: 11,
    range: 12,
    unit: Unit.KILOMETER
  },
  sort: {
    option: SortOption.ID,
    direction: SortDirection.ASCENDING
  },
  perPage: 13,
  page: 14
};
let events = SeatGeekClient.getEvents(query);
```

#### Arguments

* `ids`
  * An array of event ids to query for
  * Default value is an empty array
* `venues`
  * An object used to specify venue filtering
  * `ids`
    * An array of venue ids to query for
    * Default value is an empty array
  *
* `cityName`
  * A string representing a city name
  * Default value is an empty string
* `stateCode`
  * A string representing the ISO state code
  * Default value is an empty string
* `countryCode`
  * A string representing the ISO country code
  * Default value is an empty string
* `useIpAddress`
  * A boolean representing whether or not to use the IP address location to search for venues
  * Default value is `false`
* `latitude` and `longitude`
  * Use coordinates to search for venues
  * Cannot specify just `latitude` or `longitude`
* `range`
  * An integer representing the search radius distance
  * Default value is `10`
* `unit`
  * An enum representing the search radius distance unit
  * Default value is `Unit.MILE` because fuck you, rest of the world, with your logical unit system.
