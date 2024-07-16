import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Login = dynamic(() => import('../components/Login'), { ssr: false });

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
