import HomeV2 from './components/v2/HomeV2';

// v1 homepage is preserved at ./home-client.tsx — restore that import to roll back.
export default function Page() {
  return <HomeV2 />;
}
