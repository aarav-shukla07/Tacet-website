"use client";

import { useContext } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { TransitionContext } from '@/context/TransitionContext';

type TransitionLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const TransitionLink = ({ href, children, className, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const { setIsTransitioning } = useContext(TransitionContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsTransitioning(true);

    setTimeout(() => {
      router.push(href.toString());
      // A small timeout to let the new page load before we trigger the exit animation
      setTimeout(() => {
          setIsTransitioning(false);
      }, 400); // Half of the animation duration
    }, 800); // This should match the duration of the transition animation
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
