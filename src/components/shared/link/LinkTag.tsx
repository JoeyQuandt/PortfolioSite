import { Link, LinkProps } from '@chakra-ui/react';

type ClickableLinkProps = {
  href?: string;
  children: React.ReactNode;
} & LinkProps;

export function LinkTag({ href, children, ...props }: ClickableLinkProps) {
  return (
    <Link
      href={href}
      textTransform="uppercase"
      textDecoration="none"
      position="relative"
      whiteSpace="nowrap"
      _hover={{
        '::before': {
          transformOrigin: '0% 50%',
          transform: 'scale3d(1, 1, 1)',
        },
      }}
      _before={{
        content: '""',
        position: 'absolute',
        width: '100%',
        background: 'secondary',
        height: '2px',
        top: '100%',
        left: 0,
        pointerEvents: 'none',
        transformOrigin: '100% 50%',
        transform: 'scale3d(0, 1, 1)',
        transition: 'transform 0.3s',
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
