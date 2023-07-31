import { Image } from "@chakra-ui/react";

export function OvalIcon({...props}){
    return(
        <Image
            src="./oval.svg"
            {...props}
        />
    )
}

export function CircleIcon({...props}){
    return(
        <Image
            src="./circle.svg"
            {...props}
        />
    )
}