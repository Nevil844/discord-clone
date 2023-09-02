import exp from "constants";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
    src?: string;
    className?: string;
}

export const UserAvatar = ({ src, className }: UserAvatarProps) => {
    return (
        <Avatar className={cn(
            "h-7 w-7 mid:h-10 mid:w-10",
            className
        )}>
            <AvatarImage src={src} /> 
        </Avatar>
    )
}