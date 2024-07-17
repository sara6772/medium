import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const BlogPage = ({blog}: {blog : Blog}) => {
    return <div>
        <Appbar/>
        <div className=" flex justify-center ">
            <div className=" grid grid-cols-12 pt-12 w-full px-20">
                <div className=" col-span-8 ">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className=" text-slate-500 pt-2 ">
                        Posted on 21st July, 2024
                    </div>
                    <div className=" pt-4 ">
                        {blog.content}
                    </div> 
                </div>
                <div className=" col-span-4 ">
                    <div className=" text-slate-600 text-lg">
                        Author
                    </div>
                    <div className=" flex w-full">
                        <div className="flex flex-col justify-center pr-4">
                            <Avatar name={blog.author.name} size="big"/>
                        </div>
                        <div>
                            <div className=" text-xl font-bold ">
                                {blog.author.name}
                            </div>
                            <div className=" text-slate-500 pt-2">
                                    Catchy description about the author
                            </div>
                         </div>
                    </div>
                    
                </div>
            </div>
        </div>  
    </div>
}   