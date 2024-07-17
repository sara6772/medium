export const Skeleton = () => {
    return<div role="status" className="animate-pulse">
        <div className="p-4 border-b pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="h-4 pt-2 bg-gray-200 rounded-full max-w-[250px]"></div>
            <div className="mt-5 h-6 bg-gray-200 rounded-full max-w-[200px] mb-2.5"></div>
            <div className="h-4 bg-gray-200 rounded-full w-full"></div>
            <div className="mt-5 h-2 bg-gray-200 rounded-full max-w-[100px]"></div>
        </div>
    </div>     
}