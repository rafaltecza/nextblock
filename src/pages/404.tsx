import {useEffect} from "react";
import {Routes} from "../consts/Routes";
import {useRouter} from "next/router";

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        router.push(Routes.HOME).catch();
    }, [router]);

    return null;
}

export default Custom404;