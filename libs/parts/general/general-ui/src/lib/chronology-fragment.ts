import { Fragment, HistoricalDate } from '@cadmus/core';

/**
 * The chronology layer fragment server model.
 */
export interface ChronologyFragment extends Fragment {
  date: HistoricalDate;
  label?: string;
  tag?: string;
}

export const CHRONOLOGY_FRAGMENT_TYPEID = 'fr.net.fusisoft.chronology';

export const CHRONOLOGY_FRAGMENT_SCHEMA = {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.json',
  type: 'object',
  title: 'ChronologyFragment',
  required: ['location', 'date'],
  properties: {
    location: {
      $id: '#/properties/location',
      type: 'string'
    },
    baseText: {
      $id: '#/properties/baseText',
      type: 'string'
    },
    date: {
      type: 'object',
      required: ['a'],
      properties: {
        a: {
          type: 'object',
          required: ['value'],
          properties: {
            value: {
              type: 'integer'
            },
            isCentury: {
              type: 'boolean'
            },
            isSpan: {
              type: 'boolean'
            },
            isApproximate: {
              type: 'boolean'
            },
            isDubious: {
              type: 'boolean'
            },
            day: {
              type: 'integer'
            },
            month: {
              type: 'integer'
            },
            hint: {
              type: 'string'
            }
          }
        },
        b: {
          type: 'object',
          required: ['value'],
          properties: {
            value: {
              type: 'integer'
            },
            isCentury: {
              type: 'boolean'
            },
            isSpan: {
              type: 'boolean'
            },
            isApproximate: {
              type: 'boolean'
            },
            isDubious: {
              type: 'boolean'
            },
            day: {
              type: 'integer'
            },
            month: {
              type: 'integer'
            },
            hint: {
              type: 'string'
            }
          }
        }
      },
      label: {
        type: 'string'
      },
      tag: {
        type: 'string'
      }
    }
  }
};