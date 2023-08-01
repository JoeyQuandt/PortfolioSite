import { Image } from "@chakra-ui/react";

export function OvalIcon({...props}){
    return(
        <Image
            src="./oval.svg"
            width={{lg:"300px"}}
            {...props}
        />
    )
}

export function CircleIcon({...props}){
    return(
        <Image
            src="./circle.svg"
            width={{lg:"100px"}}
            {...props}
        />
    )
}