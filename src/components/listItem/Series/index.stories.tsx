import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import CenterWrap from '@/wrap/Center';
import SeriesList from '.';

export default {
  title: 'components/List/Series',
  component: SeriesList,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const props = {
    data: {
      query: {
        series: {
          name: 'SSR, CSR 그것이 궁금하다',
          posts: {
            edges: [
              {
                node: {
                  slug: 'what-is-spa',
                  title: 'components/SPA란?',
                },
              },
              {
                node: {
                  slug: 'which-ssr-or-csr-should-be-used',
                  title: 'components/SSR, CSR 도대체 무엇이 좋을까?',
                },
              },
            ],
          },
        },
      },
    },
  };
  return <SeriesList {...props} />;
};
