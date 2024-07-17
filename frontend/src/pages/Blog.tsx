import { Appbar } from "../ components/Appbar";
import { BlogPage } from "../ components/BlogPage";
import { BlogSkeleton } from "../ components/BlogSkeleton";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if(loading){
        return <div>
            <Appbar/>
            <BlogSkeleton/>
        </div>
    }

    return <div>
        <BlogPage blog={ blog }/>
    </div>
}