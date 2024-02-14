import { NextPage, NextPageContext } from 'next';
import * as Sentry from '@sentry/nextjs';

import { ErrorPage } from '@/components/templates';

export interface ErrorProps {
  statusCode?: number | null;
}

const MyError: NextPage<ErrorProps> = props => <ErrorPage {...props} />;

MyError.getInitialProps = async ({ res, err }: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException({ res });
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default MyError;
