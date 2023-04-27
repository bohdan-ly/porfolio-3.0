import { WithLayout } from './withLayout';
import { WithRouter } from './withRouter';
import { WithTheme } from './withTheme';

export const ConnectProviders = ({ children }) => {
  return (
    <WithRouter>
      <WithTheme>
        <WithLayout>{children}</WithLayout>
      </WithTheme>
    </WithRouter>
  );
};
