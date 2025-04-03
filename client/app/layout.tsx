import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TileCraft - GeoJSON 스타일링 & 지도 PNG 저장 툴',
  description:
    'TileCraft는 GeoJSON 데이터를 업로드하고, 지도 스타일을 자유롭게 커스터마이징한 뒤 PNG로 저장할 수 있는 웹 기반 툴입니다. 디자이너와 개발자를 위한 가벼운 지도 제작 도구.',
  keywords: [
    'GeoJSON',
    '지도 시각화',
    '지도 스타일링',
    '타일 생성기',
    'Map Styling',
    'PNG 지도 저장',
    'TileCraft',
    'MapLibre',
    '웹 GIS 툴',
  ],
  authors: [{ name: 'yg1110' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
