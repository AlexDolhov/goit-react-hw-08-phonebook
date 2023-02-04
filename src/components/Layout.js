import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { SectionContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <SectionContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </SectionContainer>
      <Toaster position="top-right" reversOrder={false} />
    </div>
  );
};
