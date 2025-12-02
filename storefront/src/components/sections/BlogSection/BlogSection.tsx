import { BlogPost } from '@/types/blog';
import { BlogCard } from '@/components/organisms';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Stop paying commissions, Start selling everywhere. Multi-platform sales points when you join the collective.",
    excerpt:
      "See what the Community Marketplace has to offer.",
    image: '/images/blog/post-1.jpg',
    category: 'ACCESSORIES',
    href: '#',
  },
  {
    id: 2,
    title: 'If you can ship it, you can sell it',
    excerpt:
      'Get what you need in one place from community members close to you. We select the community vendors closest to your location. This keeps our carbon footprint and shipping costs low.',
    image: '/images/blog/post-2.jpg',
    category: 'STYLE GUIDE',
    href: '#',
  },
  {
    id: 3,
    title: 'Commission Free Marketplace',
    excerpt:
      'We keep the cost down. Collective Marketplace fees are $9 a month. No commission and no transaction fees.',
    image: '/images/blog/post-3.jpg',
    category: 'TRENDS',
    href: '#',
  },
];

export function BlogSection() {
  return (
    <section className='bg-tertiary container'>
      <div className='flex items-center justify-between mb-12'>
        <h2 className='heading-lg text-tertiary'>
          STAY UP TO DATE
        </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            index={index}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}
