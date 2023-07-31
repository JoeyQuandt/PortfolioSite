import { Link, LinkProps } from "@chakra-ui/react"

type ClickableLinkProps = {
    href: string,
    children: React.ReactNode
} & LinkProps;


export function LinkTag({href, children,...props} : ClickableLinkProps){
    return(
        <Link href={href} textTransform="uppercase" textDecorationColor="secondary" textDecorationThickness={"2px"} textUnderlineOffset={"12px"} {...props}>
            {children}
        </Link>
    )
}