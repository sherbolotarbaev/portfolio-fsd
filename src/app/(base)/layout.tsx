import { getMe } from '~/app/redux/api/me/ssr';

import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default async function BaseLayout({ children }: Readonly<BaseLayoutProps>) {
  const me = await getMe();

  return (
    <>
      <Header me={me} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
