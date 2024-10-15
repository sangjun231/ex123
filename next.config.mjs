/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
            protocol: 'https',
        // 깃허브에서 호스팅 되는 이미지 사용 허용 ( readme 이미지 제공 등 )
        hostname: 'raw.githubusercontent.com'
      },
      {
          protocol: 'https',
          // supabase 에서 호스팅 되는 이미지 허용 ( 스토리지 )
        hostname: 'netvvmmkvqmzzmsgzjgx.supabase.co'
      }
    ]
    },
    // import icon from './icon.svg' 처럼 .svg파일을 컴포넌트처럼 사용 가능
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

export default nextConfig;